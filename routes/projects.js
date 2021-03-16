const express = require('express');

const User = require('../db/models/User');
const Project = require('../db/models/Project');
const Vote = require('../db/models/Vote');

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
            const project = await Project.query().orderBy('created_at', 'DESC');
            console.log(project);
            res.json(project);
        }
        /*
            @TRENDING
            Query all the projects, 
            filter & get the projects uploaded in last 7 days,
            add the count of repeated projects' rows &
            get the desc order based on the count
        */
        else if(sortBy === 'trending') {
            const project = await Vote
                .query()
                .select('project', 'created_at')
                .where('created_at', '>=', new Date(Date.now() - 7 * 24*60*60 * 1000))
                .count('project')
                .groupBy('project', 'created_at')
                .orderBy('count', 'DESC');                

            console.log('trending' ,project);
            res.json(project);
        }
        else if(sortBy === 'popular') {
            const project = await Vote  
                .query()
                .select('project', 'created_at')
                .count('project')
                .groupBy('project', 'created_at')
                .orderBy('count', 'DESC');
            console.log('popular', project);
            res.json(project);
        }
    });

router.route('/:projectId')
    .get(async (req, res) => {
        const project = await Project 
            .query()
            .findById(req.params.projectId);
        console.log(project);
        res.json(project);
    })

module.exports = router;