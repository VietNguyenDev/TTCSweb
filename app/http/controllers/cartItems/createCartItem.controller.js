import { createCartItemService } from "../../services/cartItem.service.js";

export async function createCartItemController (req, res) {
    try {
        const {cart_id, session_id, product_id, quantity} = req.body;
        const newCartItem = await createCartItemService({cart_id, session_id, product_id, quantity});
        return res.status(201).send({message: "Cart item created successfully", data: newCartItem}); 
    }  catch (error) {
        res.status(500).send({ error: error.message });
    } 
}