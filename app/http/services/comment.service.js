import CommentModel from "../models/comment.model.js";

export async function getCommentsService(productId) {
    try {
        const comments = await CommentModel.query().where("product_id", productId);
        return { message: "Comments retrieved successfully", data: comments };
    } catch (error) {
        abort(500, error.message);
    }
}

export async function deleteCommentService(commentId) {
    try {
        const comment = await CommentModel.query().deleteById(commentId);
        return { message: "Comment deleted successfully", data: comment };
    } catch (error) {
        abort(500, error.message);
    }
}

export async function createCommentService(comment) {
    try {
        const newComment = await CommentModel.query().insert(comment);
        return { message: "Comment created successfully", data: newComment };
    } catch (error) {
        abort(500, error.message);
    }
}