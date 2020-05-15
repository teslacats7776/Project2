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
      project_manager: {
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
    return ProjectManager;
  };