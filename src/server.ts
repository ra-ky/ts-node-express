// src/server.ts
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger";
import sequelize from "./config/db";
import postRoutes from "./routes/posts.route";
import commentRoutes from "./routes/comments.route";
import userRoutes from "./routes/users.route";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);
app.use("/users", userRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
