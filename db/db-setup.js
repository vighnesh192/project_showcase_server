const knex = require('knex');
const knexfile = require('./knexfile');
const {Model} = require('objection');

let db = knex(knexfile.development);

function setupDb() {
    const db = knex(knexfile.development);
    Model.knex(db);
}

module.exports = { db, setupDb }