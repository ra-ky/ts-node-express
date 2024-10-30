import { ModelDefined, DataTypes, Optional } from "sequelize";
import sequelize from "../config/db";
import User from "./users.model";
import Post from "./posts.model";

interface CommentAttributes {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  postId: number;
}

export type CommentCreationAttributes = Optional<
  CommentAttributes,
  "id" | "createdAt" | "updatedAt"
>;

export type CommentUpdateAttributes = Optional<
  CommentAttributes,
  "id" | "createdAt" | "updatedAt" | "userId" | "postId"
>;

const Comment: ModelDefined<CommentAttributes, CommentCreationAttributes> =
  sequelize.define(
    "Comment",
    {
      commentId: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      postId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
    },
    {
      tableName: "comments",
      timestamps: true,
    }
  );

export default Comment;
