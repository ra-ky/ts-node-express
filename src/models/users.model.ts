import { DataTypes, ModelDefined, Optional } from "sequelize";
import sequelize from "../config/db";
import Comment from "./comments.model";
import Post from "./posts.model";

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export type UserCreationAttributes = Optional<
  UserAttributes,
  "id" | "createdAt" | "updatedAt"
>;

const User: ModelDefined<UserAttributes, UserCreationAttributes> =
  sequelize.define(
    "User",
    {
      userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "users",
      timestamps: true,
    }
  );

export default User;
