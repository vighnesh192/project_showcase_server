const {Model} = require('objection');

class Image extends Model {
    static get tableName() {
        return 'image';
    }
}

module.exports = Image;