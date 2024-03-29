const express = require('express');
const multer = require('multer');

const User = require('../db/models/User');
const Project = require('../db/models/Project');
const Vote = require('../db/models/Vote');
const Project_User = require('../db/models/Project_User');
const { ensureAuth, ensureGuest } = require('../middlewares/auth');
const {upload} = require('../services/multerServices');
const Image = require('../db/models/Image');
const Comment = require('../db/models/Comment');
// const uploadToS3 = require('../services/multerServices');

const app = express();
app.use(express.json());

const router = express.Router();

router.route('/')
    .get(async (req, res) => {
        const {sortBy} = req.query;
        /*
            @NEW
            Query the latest projects uploaded
        */
        if(sortBy === 'new') {
            try {
                const projects = await Project
                .query()
                .orderBy('created_at', 'DESC')
                .withGraphFetched('user')
                .withGraphFetched('allVotes')
                .withGraphFetched('image');
                let updatedProjects = await projects.map(async (project, index) => {
                    //Remove IF code after updating the seed data
                    if(project.user.length == 0) {
                        return project;
                    }
                    else {
                        let projWithUser = await Promise.all(project.user.map(async (user, i) => {
                            let avatar = await User.query().findById(user.id).withGraphFetched('profilePic');
                            projects[index].user[i]["profilePic"] = avatar.profilePic;
                            return project;
                        }));
                        return projWithUser[0];
                    }
                });

                const promises = await Promise.all(updatedProjects);
                res.json(promises);
            } catch (error) {
                res.status(404).json({msg: 'Not found'});
            }
            
        }
        /*
            @TRENDING
            Query all the projects, 
            filter & get the projects uploaded in last 7 days,
            add the count of repeated projects' rows &
            get the desc order based on the count
        */
        else if(sortBy === 'trending') {
            try {
                const projects = await Vote
                .query()
                .select('project')
                .where('created_at', '>=', new Date(Date.now() - 7 * 24*60*60 * 1000))
                .groupBy('project')
                .count('project')
                .orderBy('count', 'DESC')
                .withGraphFetched('image')
                .withGraphFetched('proj')
                .withGraphFetched('user')
                .withGraphFetched('allVotes');  // @TODO  Try to optimize allVotes ;                

                let updatedProjects = await projects.map(async (project, index) => {
                    //Remove IF code after updating the seed data
                    if(project.user.length == 0) {
                        return project;
                    }
                    else {
                        let projWithUser = await Promise.all(project.user.map(async (user, i) => {
                            let avatar = await User.query().findById(user.id).withGraphFetched('profilePic');
                            projects[index].user[i]["profilePic"] = avatar.profilePic;
                            return project;
                        }));
                        return projWithUser[0];
                    }
                });

                const promises = await Promise.all(updatedProjects);
                res.json(promises);
            } catch (error) {
                console.log(error)
                res.status(404).json({msg: 'Not found'});
            }
        }
        /*
            @POPULAR
            Get the most voted projects of all time
        */
        else if(sortBy === 'popular') {
            
            try {
                let projects = await Vote  
                .query()
                .select('project')
                .groupBy('project')
                .count('project')
                .orderBy('count', 'DESC')
                .withGraphFetched('proj')
                .withGraphFetched('user')
                .withGraphFetched('allVotes')
                .withGraphFetched('image');  // @TODO  Try to optimize allVotes 

                let updatedProjects = await projects.map(async (project, index) => {
                    //Remove IF code after updating the seed data
                    if(project.user.length == 0) {
                        return project;
                    }
                    else {
                        let projWithUser = await Promise.all(project.user.map(async (user, i) => {
                            let avatar = await User.query().findById(user.id).withGraphFetched('profilePic');
                            projects[index].user[i]["profilePic"] = avatar.profilePic;
                            return project;
                        }));
                        return projWithUser[0];
                    }
                });

                const promises = await Promise.all(updatedProjects);
                res.json(promises);
            } catch (error) {
                console.log(error);
                res.status(404).json({msg: 'Not found'});
            }
        }
    })
    
    // @desc Upload a Project
    // @route POST /projects/
    .post(ensureAuth, async (req, res) => {
        const postFunc = async (req, res, err) => {
            console.log('IN POST FUNC')
            if(err) {
                console.log('ERR', err)
                res.sendStatus(500);
            }
            try {
                console.log('REQUEST OBJECT', req.file)
                const { title, tagline, description, website, github, youtube } = req.body; 
                const data = { title, tagline, description, website, github, youtube };
                const project = await Project
                    .query()
                    .insert(data)
                    .then(async (project) => {
                        const project_user = await Project_User
                            .query()
                            .insert({project: project.id, projOwner: req.user.id});
                        if(process.env.NODE_ENV === 'production') {
                            const image = await Image
                                .query()
                                .insert({project: project.id, url: req.file.location});
                        }
                        else {
                            const image = await Image
                                .query()
                                .insert({project: project.id, url: req.file.filename});    
                        }
                        res.json({ project, image: req.file })
                    });
            } catch (error) {
                console.log(error)
                res.status(500).json({status: 'Failed', err: error});
            }
        }
        
        if(process.env.NODE_ENV !== 'production') {
            upload(req, res, async (err) => {
                postFunc(req, res, err);
            })
        }
        else {
            uploadToS3(req, res, async (err) => {
                postFunc(req, res, err);
            })
        }
    });

// @desc Get a Project
// @route GET /projects/:projectId
router.route('/:projectId')
    .get(async (req, res) => {
        const project = await Project 
            .query()
            .findById(req.params.projectId)
            .withGraphFetched('allVotes')
            .withGraphFetched('image')
            .withGraphFetched('user')
            .withGraphFetched('comments');

        let projWithUser = project.user.map(async (user, i) => {
            let avatar = await User.query().findById(user.id).withGraphFetched('profilePic');
            user["profilePic"] = avatar.profilePic;
            return project;
        })
        
        let commentByAvatar = project.comments.map(async (comment, i) => {
            let avatar = await User.query().findById(comment.userID).withGraphFetched('profilePic');
            comment["profilePic"] = avatar.profilePic;
            comment["first_name"] = avatar.first_name;
            comment["last_name"] = avatar.last_name;
            comment["username"] = avatar.username;
            return project;
        })

        const promisesOfUser = await Promise.all(projWithUser);
        const promisesOfComments = await Promise.all(commentByAvatar)

        // const promisesOfComments = await Promise.all(commentByAvatar).then((data) => {
        //     let commsOnPost = data[0].comments.filter((comment) => comment.onPost)
        //     for(let comment of commsOnPost) {
        //         comment["replies"] = []
        //         for(let reply of data[0].comments) {
        //             if((!reply.onPost) && (reply.commentOnID === comment.id)) {
        //                 comment["replies"].push(reply) 
        //             }
        //         }
        //     }
        //     data[0].comments = commsOnPost;
        //     console.log(data[0]);
        //     res.json(data[0]);
        // })

        // let arr = await Promise.all(commsOnPost.map(async (comment) => {
        //     comment["replies"] = [];
        //     return await Promise.all(promisesOfComments[0].comments.map((reply) => {
        //         if(!reply.onPost && (reply.commentOnID === comment.id)) {
        //             return comment["replies"].push(reply)
        //         }
        //     }))
        // }))
        // console.log(commsOnPost);
        
        // console.log(promisesOfComments[0].comments[0])
        promisesOfComments[0] ? res.json(promisesOfComments[0]) : res.json(promisesOfUser[0])
    })

// @desc Upvote
// @route GET /projects/vote
router.route('/vote')
    .post(ensureAuth, async (req, res) => {
        const checkIfAlreadyVoted = await Vote
            .query()
            .where({
                votedBy: req.user.id,
                project: req.body.project
            });
        if(checkIfAlreadyVoted.length > 0) {
            try {
                const deleteVote = await Vote
                    .query()
                    .delete()
                    .where({
                        votedBy: req.user.id,
                        project: req.body.project
                    })
                res.json({ success: true })
            } 
            catch (error) {
                console.log(error)
                res.json({ success: false })
            }
        }
        else {
            try {
                const userId = await req.user.id;
                const data = {
                    votedBy: req.user.id,
                    project: req.body.project,
                    value: 1,
                    deletedAt: null
                }
                const vote = await Vote
                    .query()
                    .insert(data)
                res.json({ success: true, vote });
            } 
            catch (error) {
                console.log(error)
                res.json({ success: false });
            }
        }
    })

// @desc Post a Comment
// @route POST /projects/:projectId/comment
router.route('/:projectId/comment')
    .post(ensureAuth, async (req, res) => {
        try {
            const data = {
                userID: req.user.id,
                projectID: req.params.projectId,
                commentOnID: req.body.commentOnID,
                onPost: req.body.onPost,
                body: req.body.body,
                deletedAt: null
            }

            const comment = await Comment
                .query()
                .insert(data)

            let avatar = await User.query().findById(comment.userID).withGraphFetched('profilePic');
            comment["profilePic"] = await avatar.profilePic;

            res.json({ success: true, comment });

        } catch (error) {
            res.json({ success: false, error });
        }
    })

router.route('/:projectId/comment/:commentId')
    .patch(ensureAuth, async (req, res) => {
        try {
            let comment = await Comment
                    .query()
                    .where({
                        id: req.params.commentId
                    })
                    .update({
                        body: req.body.body,
                        updated_at: 'now'
                    })
                    .returning([
                        'id', 'userID', 'projectID', 'commentOnID', 'onPost', 'body', 'created_at', 'updated_at', 'deletedAt'
                    ])
    
            res.json({ success: true, comment: comment[0] })
        } catch (error) {
            console.log(error)
        }
    })


module.exports = router;