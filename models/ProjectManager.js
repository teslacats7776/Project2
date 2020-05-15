// header space


module.exports = function (sequelize, DataTypes) {
    var ProjectManager = sequelize.define("ProjectManager",
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

    // associating Projects Manager table to Team Members and Projects
    ProjectManager.associate = function(models){
      // Each Project Manager has many Team Members
      models.ProjectManager.hasMany(models.TeamMember)
      // Each Project Manager has many Projects
      models.ProjectManager.hasMany(models.Project)
    }

    return ProjectManager;
  };