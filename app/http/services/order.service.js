import dayjs from "dayjs";
async function createOrderDetailsService(orderItems,userId) {
    const order = {
        create_at : dayjs().format('YYYY-MM-DD'),
        user_id: userId,
        orderItems: orderItems.map((element) => ({
            product_id: element.product_id,
            quantity: element.quantity,
        })),
    };
};

export default createOrderDetailsService;