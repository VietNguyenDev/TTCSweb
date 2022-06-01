import { createCommentService } from "../../services/comment.service.js";

export const createCommentController = async (req, res) => {
  try {
    const { cmt_id, product_id, user_id, content } = req.body;
    const newComment = await createCommentService({ cmt_id, product_id, user_id, content });
    return res.status(200).send({ message: "Comment created successfully", data: newComment });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}