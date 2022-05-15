import {DeleteProductService} from '../../services/product.service.js';


async function DeleteProductController(req, res) {
  const { id } = req.params;
  await DeleteProductService({ id });
  return res.status(200).send({ message: "Product deleted successfully" });
}

export default DeleteProductController;