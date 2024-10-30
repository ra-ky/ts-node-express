import { Request, Response } from "express";
import CommentService from "../services/comments.service";

class CommentController {
  async create(req: Request, res: Response) {
    try {
      const comment = await CommentService.create(req.body);
      res.status(201).json(comment);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const commentId = Number(req.params.id);
      const comment = await CommentService.update(commentId, req.body);
      res.status(200).json(comment);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const commentId = Number(req.params.id);
      const comment = await CommentService.delete(commentId);
      res.status(200).json(comment);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  async getAllByPostId(req: Request, res: Response) {
    try {
      const commentId = Number(req.params.postId);
      const comments = await CommentService.getAllByPostId(commentId);
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
}

export default new CommentController();
