const {Model} = require('objection');

class Project extends Model {
    static get tableName() {
        return 'project';
    }

    static get relationMappings() {
        const Vote = require('./Vote');
        return {
            vote: {
                relation: Model.HasManyRelation,
                modelClass: Vote,
                join: {
                  from: 'project.id',
                  to: 'vote.project'
                }
            }
        }
    };
}

module.exports = Project;