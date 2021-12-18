const User = require('./User');
const Book = require('./Book');
const Review = require('./Review');

User.hasMany(Review, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Review.belongsTo(User, {
  foreignKey: 'user_id'
});

Book.hasMany(Review, {
  foreignKey: 'book_id',
  onDelete: 'CASCADE'
});

Review.belongsTo(Book, {
  foreignKey: 'book_id'
});

module.exports = { User, Book, Review };
