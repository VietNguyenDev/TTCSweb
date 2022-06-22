import OrderDetailModel from "../models/orderDetail.model.js";

export async function createOrderDetailService(orderDetail, orderId) {
  try {
    const newOrderDetail = await OrderDetailModel.query().insert({
      user_id: orderDetail.user_id,
      payment_id: orderDetail.payment_id,
      total: orderDetail.total,
    });
  } catch (error) {
    return abort(500, "Error creating order detail");
  }
}

export async function getListOrderDetailService(orderId) {
  try {
    const orderDetail = await OrderDetailModel.query().where(
      "order_id",
      orderId
    );
    return {
      message: "Order detail retrieved successfully",
      data: orderDetail,
    };
  } catch (error) {
    return abort(500, "Error retrieving order detail");
  }
}

export async function deleteOrderDetailService(orderDetailId) {
  try {
    const orderDetail = await OrderDetailModel.query().deleteById(
      orderDetailId
    );
    return { message: "Order detail deleted successfully", data: orderDetail };
  } catch (error) {
    return abort(500, "Error deleting order detail");
  }
}

export async function getListOrderItemsService(orderItemId) {
  try {
    const orderItem = await OrderDetailModel.query()
      .findOne({ id: orderItemId })
      .select("order_id", "user_id", "payment_id", "total")
      .withGraphFetched("OrderItem", (builder) => {
        builder.select("id", "order_id", "product_id", "quantity");
      })
      .withGraphFetched("OrderItem.product", (builder) => {
        builder.select("id", "name", "price", "image");
      });

    return { message: "Order item retrieved successfully", data: orderItem };
  } catch (error) {
    return abort(500, "Error retrieving order item");
  }
}
