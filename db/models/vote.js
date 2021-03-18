const {Model} = require('objection');

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
                  from: 'vote.project',
                  to: 'project.id'
                }
            }
        }
    };
}

module.exports = Vote;