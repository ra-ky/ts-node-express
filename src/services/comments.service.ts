import Comment, {
  CommentCreationAttributes,
  CommentUpdateAttributes,
} from "../models/comments.model";
import { Post, User } from "../models";

class CommentService {
  async create(commentData: CommentCreationAttributes) {
    const post = await Post.findByPk(commentData.postId);
    if (post) {
      const user = await User.findByPk(commentData.userId);
      if (user) {
        return await Comment.create(commentData);
      }
      throw new Error("User not found");
    } else {
      throw new Error("Post not found");
    }
  }

  async update(commentId: number, commentData: CommentUpdateAttributes) {
    const comment = await Comment.findByPk(commentId);
    if (comment) {
      return await comment.update(commentData);
    } else {
      throw new Error("Comment not found");
    }
  }

  async delete(id: number) {
    const comment = await Comment.findByPk(id);
    if (!comment) {
      throw new Error("Comment not found");
    }
    await comment.destroy();
    return comment;
  }

  async getAllByPostId(postId: number) {
    return await Comment.findAll({ where: { postId } });
  }
}

export default new CommentService();
