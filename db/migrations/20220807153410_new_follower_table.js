
exports.up = function(knex) {
    return knex.schema
        .createTable('follower', (table) => {
            table.increments();
            // The user being followed
            table.integer('userID').references('id').inTable('user');
            // The user who is following
            table.integer('followerID').references('id').inTable('user');
            table.timestamps(true, true);
            table.datetime('deletedAt');
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable('follower')
};
