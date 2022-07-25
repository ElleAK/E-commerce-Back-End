const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
//     o	id
// o	Integer
// o	Doesn't allow null values
// o	Set as primary key
// o	Uses auto increment
// o	tag_name
// o	String

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
