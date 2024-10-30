import User, { UserCreationAttributes } from "../models/users.model";

class UserService {
  async create(userData: UserCreationAttributes) {
    return await User.create(userData);
  }

  async getAll() {
    return await User.findAll();
  }

  async getById(userId: number) {
    return await User.findByPk(userId);
  }

  async update(userId: number, userData: UserCreationAttributes) {
    const user = await User.findByPk(userId);
    if (user) {
      return await user.update(userData);
    }
    throw new Error("User not found");
  }

  async delete(userId: number) {
    const user = await User.findByPk(userId);
    if (user) {
      await user.destroy();
      return user;
    }
    return null;
  }
}

export default new UserService();
