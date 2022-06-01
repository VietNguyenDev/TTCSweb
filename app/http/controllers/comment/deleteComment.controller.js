import { deleteCommentService } from "../../services/comment.service.js";

export async function deleteCommentController(req, res) {
    try {
        const comment = await deleteCommentService(req.params.cmt_id);
        return res.status(200).send({ message: "Comment deleted successfully", data: comment });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}