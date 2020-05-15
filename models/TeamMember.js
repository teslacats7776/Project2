// header space


module.exports = function (sequelize, DataTypes) {
    var TeamMember = sequelize.define("TeamMember",
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
      team_member: {
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
    return TeamMember;
  };