import { abort } from "../../helpers/errors";
import CartItemModel from "../models/cartItem.model.js";
import ProductModel from "../models/product.model.js";

export async function createCartItemService(products) {
    try {
        const createCartItem = await CartItemModel.query().insert(products);
        return createCartItem;
    } catch (error) {
        return abort(400, "Error creating cart item");
    }
}

export async function getListCartItemService() {
    try {
        const getCartItem = await CartItemModel.query().select();
        return getCartItem;
    } catch (error) {
        return abort(400, "CartItem not found");
    }
}

export async function deleteCartItemsService({id}) {
    try {
        const items = await ProductModel.query().findById(id);
        if (!items) return abort(404, "Item not found");
        const deleteCartItems = await CartItemModel.query().deleteById(id);
        return {message: "Item deleted successfully"};
    } catch (error) {
        return abort(400, "CartItem can not delete");
    }
}

export async function updateCartItemsService({id, quantity}) {
    try {
        const updateCartItems = await CartItemModel.query().patchAndFetchById(id, {quantity});
        return updateCartItems;
    } catch (error) {
        return abort(400, "CartItem can not update");
    }
}