import {DeleteProduct} from '../../services/product.service.js';


async function DeleteProductController(req, res) {
  const { id } = req.params;
  await DeleteProduct({ id });
  return res.status(200).send({ message: "Product deleted successfully" });
}

export default DeleteProductController;