const express = require('express');

const User = require('../db/models/User');
const Project = require('../db/models/Project');
const Vote = require('../db/models/Vote');
const { ensureAuth, ensureGuest } = require('../middlewares/auth');

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
                .withGraphFetched('proj');
                console.log(projects);
                res.json(projects);
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
                .select('project', 'created_at')
                .where('created_at', '>=', new Date(Date.now() - 7 * 24*60*60 * 1000))
                .count('project')
                .groupBy('project', 'created_at')
                .orderBy('count', 'DESC')
                .withGraphFetched('proj')
                .withGraphFetched('user');                

                console.log('trending' ,projects);
                res.json(projects);
            } catch (error) {
                res.status(404).json({msg: 'Not found'});
            }
        }
        else if(sortBy === 'popular') {
            try {
                let projects = await Vote  
                .query()
                .select('project', 'created_at')
                .count('project')
                .groupBy('project', 'created_at')
                .orderBy('count', 'DESC')
                .withGraphFetched('proj')
                .withGraphFetched('user');

                let updatedProjects = await projects.map(async (project, index) => {
                    if(project.user.length == 0) {
                        console.log('HERE');
                        return project;
                    }
                    else {
                        let projWithUser = await Promise.all(project.user.map(async (user, i) => {
                            // console.log("USER:-", user, index);
                            let avatar = await User.query().findById(user.id).withGraphFetched('profilePic');
                            projects[index].user[i]["profilePic"] = avatar.profilePic;
                            console.log('PROJECT:-', project)
                            return project;
                        }));
                        return projWithUser[0];
                    }
                });

                const promises = await Promise.all(updatedProjects);
                // projects.map((vote) => {
                //     vote.user.map((user) => {
                //         console.log('AVATARS:-', user.withGraphFetched('profilePic'));
                //     })
                // }) 
                
                console.log('PROJECTS:-', promises);
                // await console.log('PROJECTS:-', updatedProjects[2].user[0]);
                res.json(promises);
            } catch (error) {
                console.log(error);
                res.status(404).json({msg: 'Not found'});
            }
        }
    })
    // @desc Upload a Project
    // @route POST /projects/
    .post(async (req, res) => {
        console.log(req.body);
        try {
            const project = await Project
                .query()
                .insert(req.body);
            res.json({status: 'Success'})
        } catch (error) {
            res.status(500).json({status: 'Failed', err: error});
        }
    });

// @desc Get a Project
// @route GET /projects/:projectId
router.route('/:projectId')
    .get(ensureGuest, async (req, res) => {
        const project = await Project 
            .query()
            .findById(req.params.projectId)
            .withGraphFetched('vote');
        console.log(project);
        res.json(project);
    })

module.exports = router;