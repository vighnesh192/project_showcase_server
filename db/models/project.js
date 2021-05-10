const {Model} = require('objection');

class Project extends Model {
    static get tableName() {
        return 'project';
    }

    static get relationMappings() {
        const Vote = require('./Vote');
        const User = require('./User');
        return {
            allVotes: {
                relation: Model.HasManyRelation,
                modelClass: Vote,
                join: {
                  from: 'project.id',
                  to: 'vote.project'
                }
            },
             
            // Project Posted By
            user: {
                relation: Model.ManyToManyRelation,
                modelClass: User,
                join: {
                    from: "project.id",
                    through: {
                        // project_user is the join table.
                        from: "project_user.project",
                        to: "project_user.projOwner",
                    },
                    to: "user.id",
                },
            },
        }
    };
}

module.exports = Project;