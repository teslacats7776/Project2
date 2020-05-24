// header space


module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User",
     {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2]
        }
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2]
        }
      },
      manager: {
        type: DataTypes.BOOLEAN,
        default: true,
        allowNull: false,
      },
       email: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
         validate: {
           isEmail: true
         }
       },
       password: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
           len: [6]
         }
       },
      }, 
    { timestamps: false },
    );

      // associating Team Members to Project Managers, Projects, Tasks and Role
      User.associate = function(models){
        // Each Team Member has one Project
        User.hasOne(models.Project)
        // Each Team Member has one Task
        User.hasOne(models.Task)
        // User has many project members
        User.hasMany(models.ProjectMember)
      }

    return User;
  };