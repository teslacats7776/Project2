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

    // associating Projects table to Tasks, Team Members and Project Managers
    Project.associate = function(models){
    // Each Project belongs to A Project Manager
    models.Project.belongsTo(models.ProjectManager, { as: "Manager" })
    // Each Project can have many Team Members
    models.Project.belongsToMany(models.TeamMember, {
      as: "Project",
      through: "Team Member Projects"})
    // Each Project can have many Tasks
    models.Project.hasMany(models.Task)
  }
    return Project;
  }