const {Model} = require('objection');

class Google_User extends Model {
    static get tableName() {
        return 'google_user';
    }
}

module.exports = Google_User;