import deleteCommentService from "../services/comment.service";

export async function deleteCommentController(req, res) {
    try {
        const comment = await deleteCommentService(req.params.id);
        return res.status(200).send({ message: "Comment deleted successfully", data: comment });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}