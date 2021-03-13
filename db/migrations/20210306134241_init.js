
exports.up = function(knex) {
    return knex.schema
    .createTable('project', (table) => {
         table.increments();
         table.string('title', 100);
         table.string('tagline', 240);
         table.string('description', 2000);
         table.string('website');
         table.string('github');
         table.string('youtube');
         table.timestamps(true, true);
         table.datetime('deletedAt');
     })
    .createTable('image', (table) => {
         table.increments();
         table.string('url');
         table.timestamps(true, true);
         table.datetime('deletedAt');
         table.integer('project').references('id').inTable('project');
     })
     .createTable('user', (table) => {
         table.increments();
         table.string('username').notNullable();
         table.string('bio', 1000);
         table.integer('avatar').references('id').inTable('image');
         table.string('linkedin');
         table.string('twitter');
         table.string('github');
         table.string('youtube');
         table.string('facebook');
         table.timestamps(true, true);
         table.datetime('deletedAt');
     })
     .createTable('project_user', (table) => {
         table.increments();
         table.integer('user').references('id').inTable('user');
         table.integer('project').references('id').inTable('project');
     })
     .createTable('vote', (table) => {
         table.increments();
         table.integer('user').references('id').inTable('user');
         table.integer('project').references('id').inTable('project');
         table.integer('value');
         table.timestamps(true, true);
         table.datetime('deletedAt');
     })
     .createTable('comment', (table) => {
         table.increments();
         table.integer('user').references('id').inTable('user');
         table.integer('project').references('id').inTable('project');
         table.string('title', 50);
         table.string('body', 1000);
         table.timestamps(true, true);
         table.datetime('deletedAt');
     })
     // .createTable('hash_tag', (table) => {
     //     table.increments();
     //     table.string('tag');
     //     table.timestamps(true, true);
     //     table.datetime('deletedAt');
     // })                                                                                                                                                                                                                                                                  
 };
 
 exports.down = function(knex) {
   return knex.schema
   .dropTableIfExists('comment')
   .dropTableIfExists('vote')
   .dropTableIfExists('image')
   .dropTableIfExists('hash_tag')
   .dropTableIfExists('project')
   .dropTableIfExists('user');
 };
 