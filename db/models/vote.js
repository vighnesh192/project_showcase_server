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

            user: {
                relation: Model.ManyToManyRelation,
                modelClass: User,
                join: {
                    from: "vote.project",
                    through: {
                        // project_user is the join table.
                        from: "project_user.project",
                        to: "project_user.user",
                    },
                    to: "user.id",
                },
            },
        };
    };
}

module.exports = Vote;