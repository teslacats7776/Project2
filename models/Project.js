// header space


module.exports = function (sequelize, DataTypes) {
    var Project = sequelize.define("Project",
     {
      project_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2]
        }
      },
      project_status: {
        type: DataTypes.DECIMAL(2, 2),
        allowNull: false,
      },
    }, 
    { timestamps: false },
    );
    return Project;
  };
  