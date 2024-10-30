import { ModelDefined, DataTypes, Optional } from "sequelize";
import sequelize from "../config/db";
import Comment from "./comments.model"; // Comment 모델을 import
import User from "./users.model"; // User 모델을 import

interface PostAttributes {
  postId: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
}

export type PostCreationAttributes = Optional<
  PostAttributes,
  "postId" | "createdAt" | "updatedAt"
>;

const Post: ModelDefined<PostAttributes, PostCreationAttributes> =
  sequelize.define(
    "Post",
    {
      postId: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
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
    },
    {
      tableName: "posts",
      timestamps: true,
    }
  );

export default Post;
