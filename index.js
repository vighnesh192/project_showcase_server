// const {dbSetup} = require('./db/db-setup');
const { setupDb } = require('./db/db-setup');
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
require('dotenv');
const path = require('path');

// Passport config
require('./passport')(passport);

const usersRouter = require('./routes/users');
const projectsRouter = require('./routes/projects');
const authRouter = require('./routes/auth');

setupDb();

const app = express();
app.use(cors());
app.use(express.json());

// Sessions
const { db } = require('./db/db-setup');
db.schema.hasTable('session').then(exists => {
	if (exists) return;
    const fs = require('fs');
	return new Promise((resolve, reject) => {
		const schemaFilePath = path.join(__dirname, 'node_modules', 'connect-pg-simple', 'table.sql');
		fs.readFile(schemaFilePath, (error, contents) => {
			if (error) return reject(error);
			const sql = contents.toString();
			db.raw(sql).then(() => {
				resolve();
			}).catch(reject);
		});
	});
}).then(() => {
	// Session table ready.
	const pgSession = require('connect-pg-simple')(session);
	const sessionPool = require('pg').Pool;
    const sessionDBaccess = new sessionPool({
        user: process.env.USER,
        password: process.env.PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DATABASE
    });
    const sessionConfig = process.env.NODE_ENV ? 
        {
            store: new pgSession({
                conString: process.env.DATABASE_URL,
                tableName: 'session'
            }),
            name: 'SID',
            secret: process.env.SECRET,
            resave: false,
            saveUninitialized: true,
            cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }
        }
        :
        {
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

    if (process.env.NODE_ENV === 'production') {
        app.use('*', (request, response) => {
            response.sendFile(path.join(__dirname, 'public', 'index.html'));
        });
    } 
    
    // Passport Middlewares
    app.use(passport.initialize());
    app.use(passport.session());
    app.use('/users', usersRouter);
    app.use('/projects', projectsRouter);
    app.use('/auth', authRouter);

    app.use(express.static(path.join(__dirname, 'public')));
    
    const port = process.env.PORT || 8080;
    app.listen(port, () => {
        console.log('Server running on port 8080');
    })
});