const dbSetup = require('./db/db-setup');
const express = require('express');

const usersRouter = require('./routes/users');
const projectsRouter = require('./routes/projects');

dbSetup();

const app = express();
app.use(express.json());

// app.use('/user', usersRouter);
app.use('/projects', projectsRouter);

app.listen(8080, () => {
    console.log('Server running on port 8080');
})