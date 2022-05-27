import { CreateProductService } from "../../services/product.service.js";
import cloudinary from "cloudinary";

const createProductController = async (req, res) => { 
  try {
    const { name, buy_price, description, country, category_id, sell_price } = req.body;
    const image = req.file.path;

    const imagePath = await cloudinary.uploader.upload(image, {
      folder: "products",
      use_filename: true,
    });
    const { message } = await CreateProductService({ name, buy_price, description, country, category_id, sell_price, image: imagePath.url });
    return res.status(200).send({ message });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
 
}

export default createProductController;