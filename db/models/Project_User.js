const {Model} = require('objection');

class Project_User extends Model {
    static get tableName() {
        return 'project_user';
    }

    static get relationMappings() {
        const Project = require('./Project');
        return {
            projects: {
                relation: Model.HasManyRelation,
                modelClass: Project,
                join: {
                  from: 'project_user.project',
                  to: 'project.id'
                }
            },
        }
    }
}

module.exports = Project_User;