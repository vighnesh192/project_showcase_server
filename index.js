const dbSetup = require('./db/db-setup');
const express = require('express');
const passport = require('passport');
const session = require('express-session');

// Passport config
require('./passport')(passport);

const usersRouter = require('./routes/users');
const projectsRouter = require('./routes/projects');
const authRouter = require('./routes/auth');

dbSetup();

const app = express();
app.use(express.json());

// Sessions
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}))

// Passport Middlewares
app.use(passport.initialize());
app.use(passport.session());

// app.use('/user', usersRouter);
app.use('/projects', projectsRouter);
app.use('/auth', authRouter);

app.listen(8080, () => {
    console.log('Server running on port 8080');
})