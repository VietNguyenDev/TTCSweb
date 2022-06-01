import express from "express";
import { createCommentController } from "../controllers/comment/createComment.controller.js";
import { deleteCommentController } from "../controllers/comment/deleteComment.controller.js";
import { getCommentsController } from "../controllers/comment/getListComment.controller.js";

const apiComments = express.Router();

apiComments.post("/comments", createCommentController);
apiComments.post("/comments/:id", deleteCommentController);
apiComments.get("/comments", getCommentsController);

export default apiComments;