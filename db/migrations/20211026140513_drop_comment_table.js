
exports.up = function(knex) {
    return knex.schema.dropTable('comment')
};

exports.down = function(knex) {
    return knex.schema
        .createTable('comment', (table) => {
            table.increments();
            table.integer('commentBy').references('id').inTable('user');
            table.integer('project').references('id').inTable('project');
            table.string('title', 50);
            table.string('body', 1000);
            table.timestamps(true, true);
            table.datetime('deletedAt');
        })
};
