import { deleteCartItemsService } from "../../services/cartItem.service.js";

export async function deleteCartItemController (req, res) {
    try {
        const {id} = req.params;
        await deleteCartItemsService({id});
        return res.status(200).send({message: "Cart item deleted successfully"});
    } catch (error) {
        return res.status(500).send({message: "Error deleting cart item"});
    }
}
