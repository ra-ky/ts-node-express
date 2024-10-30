import { Request, Response } from "express";
import UserService from "../services/users.service";
import usersService from "../services/users.service";

class UserController {
  async create(req: Request, res: Response) {
    try {
      const { name, email } = req.body;
      const user = await UserService.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const users = await UserService.getAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const userId = Number(req.params.id);
      const user = await UserService.getById(userId);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const userId = Number(req.params.id);
      const user = await usersService.update(userId, req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const userId = Number(req.params.id);
      const user = await UserService.delete(userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
}

export default new UserController();
