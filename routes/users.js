const express = require('express');
const { fn, ref } = require('objection');

const User = require('../db/models/User');
const Project = require('../db/models/Project');
const Vote = require('../db/models/Vote');
const { ensureAuth, ensureGuest } = require('../middlewares/auth');
const Project_User = require('../db/models/Project_User');
const Follower = require('../db/models/Follower');

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
            
            // @desc Get users ordered by Most no of Votes on their Projects
            // @route GET /users/?sortBy=popular
            if(sortBy == 'popular') {
                let users = await Vote.query()
                    .select('vote.project')
                    .groupBy('vote.project')
                    .withGraphJoined('user')
                    .select('user.id as userId', 'vote.id as voteId', 'user.avatar')
                    .groupBy('user.id', 'vote.id')

                let groupBy = function(data, key) { 
                    // `data` is an array of objects, `key` is the key (or property accessor) to group by
                    // reduce runs this anonymous function on each element of `data` (the `item` parameter,
                    // returning the `storage` parameter at the end
                    return data.reduce(function(storage, item) {
                        // get the first instance of the key by which we're grouping
                        let group = item[key];
                        
                        // set `storage` for this instance of group to the outer scope (if not empty) or initialize it
                        storage[group] = storage[group] || [];
                        
                        // add this item to its group within `storage`
                        storage[group].push(item);
                        
                        // return the updated storage to the reduce function, which will then loop through the next 
                        return storage; 
                    }, {}); // {} is the initial value of the storage
                };

                let popularUsers = groupBy(users, 'userId');
                let popularUsersArray = [];
                for (let user in popularUsers) {
                    popularUsersArray.push(popularUsers[user]);
                };
                popularUsersArray.sort((a, b) => {
                    return b.length - a.length;
                })

                let usersWithAvatar = await Promise.all(popularUsersArray.map(async (user, index) => {
                    let avatar = await User.query().findById(user[0].userId).withGraphFetched('profilePic');
                    popularUsersArray[index][0]["profilePic"] = avatar.profilePic;
                    return user;
                }));
                
                if(usersWithAvatar) {
                    // res.json({users, NewUsers});
                    res.json(usersWithAvatar)
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
            const user = await User.query().findById(req.params.userId).withGraphFetched('profilePic');
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
            .select('projOwner', 'project')
            .where('projOwner', '=', req.params.userId)
            .groupBy('project', 'projOwner')
            .count('project')
            .orderBy('count', 'DESC')
            .withGraphFetched('proj')
            .withGraphFetched('user')
            .withGraphFetched('allVotes')
            .withGraphFetched('image');
        
        if(projects) {
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
        }
        else {
            res.json({ 'error': 'The user hasn not uploaded any projects. ' })
        }
    });

// @desc Get all the Projects Upvoted by a User
// @route GET /users/:userId/upvoted
router.route('/:userId/upvoted')
    .get(async (req, res) => {
        try {
            const projects = await Vote
                .query()
                .select('project', 'votedBy')
                .where('votedBy', '=', req.params.userId)
                .groupBy('project', 'votedBy')
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
    });

router.route('/:userId/follow')
    .post(ensureAuth, async (req, res) => {
        try {
            const checkFollow = await Follower
                .query()
                .where({
                    followerID: req.user.id,
                    userID: req.params.userId
                });
            console.log("CHECK FOLLOW", checkFollow)
            if(!checkFollow.length > 0) {
                const data = {
                    followerID: req.user.id, // User who has sent the request
                    userID: req.params.userId, // User being followed
                    deletedAt: null
                }
    
                const followed = await Follower
                    .query()
                    .insert(data)
    
                console.log("FOLLOWED:-", followed);
                
                res.json({ success: true, followed });
            }
            else {
                try {
                    const unfollowed = await Follower 
                        .query()
                        .delete()
                        .where({
                            followerID: req.user.id,
                            userID: req.params.userId
                        });

                    console.log("UNFOLLOWED:-", unfollowed);
                    res.json({ success: true, unfollowed });
                    
                } catch (error) {
                    res.json({ success: false, error });
                }
            }
            
        } catch (error) {
            console.log("FOLLOWED ERROR:-", error);
            res.json({ success: false, error });
        }
    })
    .get(ensureAuth, async (req, res) => {
        try {
            const checkFollow = await Follower
                .query()
                .where({
                    followerID: req.user.id,
                    userID: req.params.userId
                });
            console.log("CHECK FOLLOW in GET:-", checkFollow)
            checkFollow.length > 0 ? res.json({ success: true }) : res.json({ success: false })
        } catch (error) {
            res.json({ success: false, error })
        }        
    })

module.exports = router;