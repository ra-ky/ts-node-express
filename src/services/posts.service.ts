import Post, { PostCreationAttributes } from "../models/posts.model";
import { User, Comment } from "../models";

class PostService {
  async create(postData: PostCreationAttributes) {
    const user = await User.findByPk(postData.userId);
    if (user) {
      return await Post.create(postData);
    } else {
      throw new Error("User not found");
    }
  }

  async getAll() {
    return await Post.findAll();
  }

  async getById(postId: number) {
    return await Post.findByPk(postId, {
      include: [{ model: User }, { model: Comment }],
    });
  }

  async update(postId: number, postData: PostCreationAttributes) {
    const post = await Post.findByPk(postId);
    if (post) {
      return await post.update(postData);
    }
    throw new Error("Post not found");
  }

  async delete(postId: number) {
    const post = await Post.findByPk(postId);
    if (post) {
      await post.destroy();
      return post;
    }
    throw new Error("Post not found");
  }
}

export default new PostService();
