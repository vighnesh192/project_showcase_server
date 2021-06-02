const express = require('express');
const multer = require('multer');

const User = require('../db/models/User');
const Project = require('../db/models/Project');
const Vote = require('../db/models/Vote');
const Project_User = require('../db/models/Project_User');
const { ensureAuth, ensureGuest } = require('../middlewares/auth');
const upload = require('../services/multerServices');
const Image = require('../db/models/Image');

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
        upload(req, res, async (err) => {
            if(err) {
                console.log('ERR', err)
                res.sendStatus(500);
            }
            try {
                const { title, tagline, description, website, github, youtube } = req.body; 
                const data = { title, tagline, description, website, github, youtube };
                const project = await Project
                    .query()
                    .insert(data)
                    .then(async (project) => {
                        console.log('USER', req.user);
                        const project_user = await Project_User
                            .query()
                            .insert({project: project.id, projOwner: req.user.id});
                        const image = await Image
                            .query()
                            .insert({project: project.id, url: req.file.filename});    
                        res.json({ projectDetails: req.body, image: req.file })
                    });
            } catch (error) {
                console.log(error)
                res.status(500).json({status: 'Failed', err: error});
            }
        })
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
            .withGraphFetched('user');

        let projWithUser = project.user.map(async (user, i) => {
            let avatar = await User.query().findById(user.id).withGraphFetched('profilePic');
            console.log('AVATAR', avatar);
            console.log('USER', user);
            user["profilePic"] = avatar.profilePic;
            return project;
        })

        const promises = await Promise.all(projWithUser);

        console.log('ProjWithUser', promises);
        res.json(promises[0]);
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

module.exports = router;