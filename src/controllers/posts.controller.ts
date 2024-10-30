import { Request, Response } from "express";
import PostService from "../services/posts.service";
import { EOF } from "dns";

class PostController {
  async create(req: Request, res: Response) {
    try {
      const post = await PostService.create(req.body);
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const posts = await PostService.getAll();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const postId = Number(req.params.id);
      const post = await PostService.getById(postId);
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: "Post not found" });
      }
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const postId = Number(req.params.id);
      const post = await PostService.update(postId, req.body);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const postId = Number(req.params.id);
      const post = await PostService.delete(postId);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
}

export default new PostController();
