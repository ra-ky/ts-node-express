import Comment from "./comments.model";
import Post from "./posts.model";
import User from "./users.model";

User.hasMany(Post, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  constraints: false,
});
Post.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  constraints: false,
});

Post.hasMany(Comment, {
  foreignKey: "postId",
  onDelete: "CASCADE",
  constraints: false,
});
Comment.belongsTo(Post, {
  foreignKey: "postId",
  onDelete: "CASCADE",
  constraints: false,
});

User.hasMany(Comment, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  constraints: false,
});
Comment.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  constraints: false,
});

export { Post, Comment, User };
