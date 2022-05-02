import { CreateProduct } from "../../services/product.service.js";

const createProductController = async (req, res) => { 
  const { name, buy_price, description, country, category_id, sell_price } = req.body;
  const {message} =  await CreateProduct({ name, buy_price, description, country, category_id, sell_price });
  return res.status(201).send(message);
  
}

export default createProductController;