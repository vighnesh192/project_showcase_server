const {Model} = require('objection');

class Project_User extends Model {
    static get tableName() {
        return 'project_user';
    }

    static get relationMappings() {
        const Project = require('./Project');
        const User = require('./User');
        const Vote = require('./Vote');
        const Image = require('./Image');
        return {
            projects: {
                relation: Model.BelongsToOneRelation,
                modelClass: Project,
                join: {
                  from: 'project_user.project',
                  to: 'project.id'
                }
            },
            user: {
                relation: Model.HasManyRelation,
                modelClass: User,
                join: {
                    from: 'project_user.projOwner',
                    to: 'user.id'
                }
            },
            allVotes: {
                relation: Model.HasManyRelation,
                modelClass: Vote,
                join: {
                    from: 'project_user.project',
                    to: 'vote.project'
                }
            },
            image: {
                relation: Model.BelongsToOneRelation,
                modelClass: Image,
                join: {
                    from: "project_user.project",
                    to: "image.project"
                },
            },
            proj: {
                relation: Model.BelongsToOneRelation,
                modelClass: Project,
                join: {
                    from: "project_user.project",
                    to: "project.id",
                },
            },
        }
    }
}

module.exports = Project_User;