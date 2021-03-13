const {Model} = require('objection');

class HashTag extends Model {
    static get tableName() {
        return 'hash_tag';
    }
}

module.exports = HashTag;