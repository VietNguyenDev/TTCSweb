import  getProducts   from "../services/product.service.js"

const ProductController = async (req, res) => {
  const products = await getProducts();
  if (products.length > 0) {
    res.status(200).json(products);
  } else {
    res.status(404).json({ message: "Products is empty" });
  }
}

export default ProductController;


