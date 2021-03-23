const express = require('express');

const User = require('../db/models/User');
const Project = require('../db/models/Project');
const Vote = require('../db/models/Vote');
const { ensureAuth, ensureGuest } = require('../middlewares/auth');
const Project_User = require('../db/models/Project_User');

const app = express();
app.use(express.json());

const router = express.Router();

router.route('/')
    // @desc Get all Users
    // @route GET /users/
    .get(async (req, res) => {
        if(!req.query) {
            const allUsers = await User.query()
            if(allUsers) {
                res.json(allUsers);
            }
            else {
                res.json({ 'error': 'No users found' });
            }
        }
        else {
            const { sortBy } = req.query
            
            // @desc Get users ordered by Most Voted Projects
            // @route GET /users/?sortBy=popular
            if(sortBy == 'popular') {
                let users = await Vote.query()
                    .withGraphFetched('user')
                    .select('project', 'created_at')
                    .count('project')
                    .groupBy('project', 'created_at')
                    .orderBy('count', 'DESC');
                
                if(users) {
                    res.json(users);
                }
                else {
                    res.json({ 'error': 'No users found' });
                }

            // @desc Get users ordered by the ones who have recently uploaded a project
            // @route GET /users/?sortBy=recent 
            }
            else if(sortBy == 'recent') {
                users = await Project.query()
                    .withGraphFetched('user')
                    .select('created_at', 'id')
                    .groupBy('created_at', 'project.id')
                    .orderBy('created_at', 'DESC');
                
                if(users) {
                    res.json(users);
                }
                else {
                    res.json({ 'error': 'No users found' });
                }
            }
        }
        
    });

// @desc Get a User
// @route GET /users/:userId
router.route('/:userId')
    .get(async (req, res) => {
        try {
            const user = await User.query().findById(req.params.userId);
            if(user) {
                res.json(user);
            }
            else {
                res.json({ 'error': 'No user found with this ID' })
            }
        } catch (error) {
            res.json(error);
        }
    });

// @desc Get all the projects posted by a user
// @route GET /users/:userId/projects
router.route('/:userId/projects')
    .get(async (req, res) => {
        const projects = await Project_User
            .query()
            .withGraphFetched('projects')
        
        if(projects) {
            res.json(projects)
        }
        else {
            res.json({ 'error': 'The user hasn not uploaded any projects. ' })
        }
    });

module.exports = router;