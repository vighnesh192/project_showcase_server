const {Model} = require('objection');

class Project_User extends Model {
    static get tableName() {
        return 'project_user';
    }

    static get relationMappings() {
        const Project = require('./Project');
        const User = require('./User');
        const Vote = require('./Vote');
        return {
            projects: {
                relation: Model.BelongsToOneRelation,
                modelClass: Project,
                join: {
                  from: 'project_user.project',
                  to: 'project.id'
                }
            },
            users: {
                relation: Model.HasManyRelation,
                modelClass: User,
                join: {
                    from: 'project_user.user',
                    to: 'user.id'
                }
            },
            votes: {
                relation: Model.HasManyRelation,
                modelClass: Vote,
                join: {
                    from: 'project_user.project',
                    to: 'vote.project'
                }
            }
        }
    }
}

module.exports = Project_User;