
exports.up = function(knex) {
    return knex.schema
        .createTable('comment', (table) => {
            table.increments();
            table.integer('userID').references('id').inTable('user');
            table.integer('projectID').references('id').inTable('project');
            table.integer('commentOnID');  // Can be a POST ID or COMMENT ID
            table.boolean('onPost');
            table.string('body', 1000);
            table.timestamps(true, true);
            table.datetime('deletedAt');
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable('comment')
};
