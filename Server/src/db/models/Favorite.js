const { DataTypes } = require('sequelize');

module.exports = (database) => {
   database.define('Favorite', {
      id:{
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false
      },
      status: {
         type: DataTypes.ENUM('Alive', 'Dead','unknown'),
         allowNull: false
      },
      gender: {
         type: DataTypes.ENUM('Female', 'Male', 'Genderless','unknown'),
         // defaultValue: "unknown",
         allowNull: false
      },
      origiName: {
         type: DataTypes.STRING,
         allowNull: false
      },
      image: {
         type: DataTypes.STRING,
         allowNull: false
      }
      
   }, { timestamps: false });
};
