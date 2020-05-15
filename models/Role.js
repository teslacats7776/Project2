// header space


module.exports = function (sequelize, DataTypes) {
  var Role = sequelize.define("Role",
   {
    project_manager: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    team_member: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, 
  { timestamps: false },
  );

    // associating Roles to Project Managers and Team Members
    Role.associate = function(models){
      // Each Role has many Project Managers
      models.Role.hasMany(models.ProjectManager)
      // Each Role has many Team Members
      models.Role.hasMany(models.TeamMember)
    }

  return Role;
};
