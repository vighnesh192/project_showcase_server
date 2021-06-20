const {Model} = require('objection');

class User extends Model {
    static get tableName() {
        return 'user';
    }

    static get relationMappings() {
        const Image = require('./Image');
        return {
            profilePic: {
                relation: Model.BelongsToOneRelation,
                modelClass: Image,
                join: {
                    from: "user.avatar",
                    to: "image.id"
                },
            }
        };
    };
}

module.exports = User;