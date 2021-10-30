const {Model} = require('objection');

class Project extends Model {
    static get tableName() {
        return 'project';
    }

    static get relationMappings() {
        const Vote = require('./Vote');
        const User = require('./User');
        const Image = require('./Image');
        const Comment = require('./Comment');
        return {
            allVotes: {
                relation: Model.HasManyRelation,
                modelClass: Vote,
                join: {
                  from: 'project.id',
                  to: 'vote.project'
                }
            },
            
            comments: {
                relation: Model.HasManyRelation,
                modelClass: Comment,
                join: {
                  from: 'project.id',
                  to: 'comment.projectID'
                }
            },
            
            // Project Posted By
            user: {
                relation: Model.ManyToManyRelation,
                modelClass: User,
                join: {
                    from: "project.id",
                    through: {
                        // project_user is the join table.
                        from: "project_user.project",
                        to: "project_user.projOwner",
                    },
                    to: "user.id",
                },
            },

            image: {
                relation: Model.BelongsToOneRelation,
                modelClass: Image,
                join: {
                    from: "project.id",
                    to: "image.project"
                },
            }
        }
    };
}

module.exports = Project;