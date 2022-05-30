import { getCommentsService } from "../../services/comment.service";

export async function getCommentsController(req, res) {
    try {
        const comments = await getCommentsService();
        if (comments.length > 0) {
        res.status(200).json({
            message: "Comments list",
            data: comments
        });
        } else {
        res.status(404).json({ message: "Comments is empty" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}