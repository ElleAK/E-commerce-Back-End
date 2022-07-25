const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
//     o	id
// o	Integer
// o	Doesn't allow null values
// o	Set as primary key
// o	Uses auto increment
// o	product_id
// o	Integer
// o	References the product model's id
// o	tag_id
// o	Integer
// o	References the tag model's id

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
