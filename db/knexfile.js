// Update with your config settings.
const {knexSnakeCaseMappers} = require('objection');
require('dotenv').config({path:`${__dirname}/../.env`});

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE,
      user:     process.env.USER,
      password: process.env.PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    },
    ...knexSnakeCaseMappers
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL 
  }
};
