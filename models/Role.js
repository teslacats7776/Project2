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
  return Role;
};
