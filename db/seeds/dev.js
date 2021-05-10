
exports.seed = async function(knex) {
  // Truncate all existing tables
  await knex.raw('TRUNCATE TABLE "user" CASCADE');
  await knex.raw('TRUNCATE TABLE "image" CASCADE');
  await knex.raw('TRUNCATE TABLE "project" CASCADE');
  await knex.raw('TRUNCATE TABLE "project_user" CASCADE');
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
  }, {
    id: 2,
    title: 'title2',
    tagline: 'tagline2',
    description: 'description2',
    website: 'www.website2.com',
    github: 'github2',
    youtube: 'youtube2',
    deletedAt: null
  }, {
    id: 3,
    title: 'title3',
    tagline: 'tagline3',
    description: 'description3',
    website: 'www.website3.com',
    github: 'github3',
    youtube: 'youtube3',
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
  }, {
    id: 2,
    username: 'user2',
    bio: 'bio2',
    avatar: 2,
    linkedin: 'linkedin 2',
    twitter: 'twitter2',
    github: 'github2',
    youtube: 'youtube2',
    facebook: 'facebook2',
    deletedAt: null
  }, {
    id: 3,
    username: 'user3',
    bio: 'bio3',
    avatar: 3,
    linkedin: 'linkedin 3',
    twitter: 'twitter3',
    github: 'github3',
    youtube: 'youtube3',
    facebook: 'facebook3',
    deletedAt: null
  }]);

  // @desc  Project belongs to which User
  await knex('project_user').insert([{
    id: 1,
    projOwner: 1,
    project: 1
  },
  {
    id: 2,
    projOwner: 2,
    project: 2
  },
  {
    id: 3,
    projOwner: 3,
    project: 3
  }])

  // @desc  Vote given by a User
  await knex('vote').insert([{
    id: 1,
    votedBy: 1, //votedBy who has given the vote
    project: 1,
    value: 1,
    deletedAt: null
  }, {
    id: 2,
    votedBy: 3,
    project: 2,
    value: 1,
    deletedAt: null
  }, {
    id: 3,
    votedBy: 2,
    project: 2,
    value: 1,
    deletedAt: null
  }, {
    id: 4,
    votedBy: 1,
    project: 2,
    value: 1,
    deletedAt: null
  }, {
    id: 5,
    votedBy: 1,
    project: 3,
    value: 1,
    deletedAt: null
  }, {
    id: 6,
    votedBy: 2,
    project: 3,
    value: 1,
    deletedAt: null
  }]);

  return knex('comment').insert([{
    id: 1,
    commentBy: 1,
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
