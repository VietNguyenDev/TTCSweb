import { createCommentsService } from "../../services/comment.service";

export const createCommentController = async (req, res) => {
  try {
    const { comment, product_id, user_id } = req.body;
    const newComment = await createCommentsService({ comment, product_id, user_id });
    return res.status(200).send({ message: "Comment created successfully", data: newComment });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}