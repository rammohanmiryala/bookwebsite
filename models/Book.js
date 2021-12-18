const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
  {
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    year: {
      type: DataTypes.INTEGER,
    },
    date_posted: {
      type: DataTypes.STRING,
      allowNull: false,
      // defaultValue: DataTypes.NOW,
    },
   img_url: {
       type: DataTypes.STRING,
      allowNull: false,
   },
   purchase_link: {
      type: DataTypes.TEXT,
      allowNull: false,
   },
    synopsis: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'book',
  }
);

module.exports = Book;
