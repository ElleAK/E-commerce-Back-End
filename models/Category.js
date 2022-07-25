const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
// o	id
// o	Integer
// o	Doesn't allow null values
// o	Set as primary key
// o	Uses auto increment
// o	category_name
// o	String
// o	Doesn't allow null values

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
