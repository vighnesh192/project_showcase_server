const dbSetup = require('./db/db-setup');
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const cors = require('cors');
require('dotenv');

// Passport config
require('./passport')(passport);

const usersRouter = require('./routes/users');
const projectsRouter = require('./routes/projects');
const authRouter = require('./routes/auth');

dbSetup();

const app = express();
app.use(cors());
app.use(express.json());

// Sessions
const sessionPool = require('pg').Pool;
const sessionDBaccess = new sessionPool({
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DATABASE
});
const sessionConfig = {
    store: new pgSession({
        pool: sessionDBaccess,
        tableName: 'session'
    }),
    name: 'SID',
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }
};
app.use(session(sessionConfig));

// Passport Middlewares
app.use(passport.initialize());
app.use(passport.session());

app.use('/users', usersRouter);
app.use('/projects', projectsRouter);
app.use('/auth', authRouter);

app.listen(8080, () => {
    console.log('Server running on port 8080');
})