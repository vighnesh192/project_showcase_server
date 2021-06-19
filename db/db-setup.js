const knex = require('knex');
const knexfile = require('./knexfile');
const {Model} = require('objection');

let db = process.env.NODE_ENV ? knex(knexfile.production) : knex(knexfile.development);

function setupDb() {
    Model.knex(db);
}

module.exports = { db, setupDb }