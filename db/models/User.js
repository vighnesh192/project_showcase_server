const {Model} = require('objection');

class User extends Model {
    static get tableName() {
        return 'user';
    }
    
    static get relationMappings() {
        const Image = require('./Image');
        const Follower = require('./Follower');
        return {
            profilePic: {
                relation: Model.BelongsToOneRelation,
                modelClass: Image,
                join: {
                    from: "user.avatar",
                    to: "image.id"
                },
            },

            followers: {
                relation: Model.HasManyRelation,
                modelClass: Follower,
                join: {
                  from: 'user.id',
                  to: 'follower.userID'
                }
            },
        };
    };
}

module.exports = User;