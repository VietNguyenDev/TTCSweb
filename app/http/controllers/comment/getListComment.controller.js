import { getCommentsService } from "../../services/comment.service.js";

export async function getCommentsController(req, res) {
  try {
    const comments = await getCommentsService();
    if (comments.length > 0) {
      res.status(200).send({
        message: "Comments list",
        data: comments,
      });
    } else {
      res.status(404).send({ message: "Comments is empty" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}
