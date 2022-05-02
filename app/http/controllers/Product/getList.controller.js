import { GetProducts }   from "../../services/product.service.js"

const getList = async (req, res) => {
  const products = await GetProducts();
  if (products.length > 0) {
    res.status(200).json(products);
  } else {
    res.status(404).json({ message: "Products is empty" });
  }
}

export default getList;


