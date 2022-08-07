const { Model } = require("objection");

class Follower extends Model {
    static get tableName() {
        return 'follower'
    }
}

module.exports = Follower;