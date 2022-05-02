import {
  UpdateProduct
} from "../../services/product.service.js";

const updateProductController = async (req, res) => {
  const { id } = req.params;
  const { name, buy_price, description, country, category_id, sell_price } = req.body;
  const { message } = await UpdateProduct({
    id,
    name,
    buy_price,
    description,
    country,
    category_id,
    sell_price
  });
  return res.status(200).send({ message });
}

export default updateProductController;