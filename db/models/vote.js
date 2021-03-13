const {Model} = require('objection');

class Vote extends Model {
    static get tableName() {
        return 'vote';
    }
}

module.exports = Vote;