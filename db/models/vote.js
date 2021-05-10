const {Model} = require('objection');
const Image = require('./Image');
const User = require('./User');

class Vote extends Model {
    static get tableName() {
        return 'vote';
    }

    static get relationMappings() {
        const Project = require('./Project');
        return {
            proj: {
                relation: Model.BelongsToOneRelation,
                modelClass: Project,
                join: {
                    from: "vote.project",
                    to: "project.id",
                },
            },

            //Project Posted By
            user: {
                relation: Model.ManyToManyRelation,
                modelClass: User,
                join: {
                    from: "vote.project",
                    through: {
                        // project_user is the join table.
                        from: "project_user.project",
                        to: "project_user.projOwner",
                    },
                    to: "user.id",
                },
            },

            allVotes: {
                relation: Model.HasManyRelation,
                modelClass: Vote,
                join: {
                  from: 'vote.project',
                  to: 'vote.project'
                }
            },
        };
    };
}

module.exports = Vote;