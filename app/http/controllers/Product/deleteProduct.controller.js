import {DeleteProductService} from '../../services/product.service.js';


async function DeleteProductController(req, res) {
    try {
        const { id } = req.params;
      await DeleteProductService({ id });
      return res.status(200).send({ message: "Product deleted successfully" });
    } catch (error) {
      return res.status(500).send({ message: "Error deleting product" });
    }
}

export default DeleteProductController;