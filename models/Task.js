// header space


module.exports = function (sequelize, DataTypes) {
    var Task = sequelize.define("Task",
     {
      task_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2]
        }
      },
      task_comment: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2]
        }
     },
    }, 
        { timestamps: false },
    );
        return Task;
};