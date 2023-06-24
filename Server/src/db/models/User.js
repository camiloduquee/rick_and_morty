const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define(
    "User",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        validate: {
          isEmail: true,
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
