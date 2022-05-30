import express from "express";
import { createCommentController } from "../controllers/comment/createComment.controller";
import { deleteCommentController } from "../controllers/comment/deleteComment.controller";
import { getCommentsController } from "../controllers/comment/getComments.controller";

const apiComments = express.Router();

apiComments.post("/comments", createCommentController);
apiComments.post("/comments/:id", deleteCommentController);
apiComments.get("/comments", getCommentsController);

export default apiComments;