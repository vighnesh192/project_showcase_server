
exports.seed = async function(knex) {
  // Truncate all existing tables
  await knex.raw('TRUNCATE TABLE "user" CASCADE');
  await knex.raw('TRUNCATE TABLE "image" CASCADE');
  await knex.raw('TRUNCATE TABLE "project" CASCADE');
  await knex.raw('TRUNCATE TABLE "vote" CASCADE');
  await knex.raw('TRUNCATE TABLE "comment" CASCADE');
  // await knex.raw('TRUNCATE TABLE "hash_tag" CASCADE');

  await knex('project').insert([{
    id: 1,
    title: 'title1',
    tagline: 'tagline1',
    description: 'description1',
    website: 'www.website1.com',
    github: 'github1',
    youtube: 'youtube1',
    deletedAt: null
  }]);

  await knex('image').insert([{
    id: 1,
    url: 'www.avatar.com',
    deletedAt: null,
    project: null,
  }, {
    id: 2,
    url: 'www.project1.com/1',
    project: 1,
    deletedAt: null
  }, {
    id: 3,
    url: 'www.project1.com/2',
    project: 1,
    deletedAt: null
  }])

  await knex('user').insert([{
    id: 1,
    username: 'user1',
    bio: 'bio1',
    avatar: 1,
    linkedin: 'linkedin 1',
    twitter: 'twitter1',
    github: 'github1',
    youtube: 'youtube1',
    facebook: 'facebook1',
    deletedAt: null
  }]);

  await knex('project_user').insert([{
    id: 1,
    user: 1,
    project: 1
  }])

  await knex('vote').insert([{
    id: 1,
    user: 1,
    project: 1,
    value: 1,
    deletedAt: null
  }]);

  return knex('comment').insert([{
    id: 1,
    user: 1,
    project: 1,
    title: 'comment1',
    body: 'comment body 1',
    deletedAt: null
  }])

  // return knex('hash_tag').insert([{
  //   id: 1,
  //   tag: 'postgres',
  //   deletedAt: null
  // }])
};
