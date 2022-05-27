import { GetProductsService }   from "../../services/product.service.js"

async function getListProductController(req, res) {

    //pagination
    const pageLimit = 10;
    const pageCount = Math.ceil(products.length / 10);
    let page = parseInt(req.query.p);
    if (!page) { page = 1}
    if (page > pageCount) {
      page = pageCount
    }
    res.json({
      "page": page,
      "pageCount": pageCount
    });

  const products = await GetProductsService();
  const offset = page * 10 - 10;
   products = Product.query().offset(offset).limit(10);

  if (products.length > 0) {
    res.status(200).json(products);
  } else {
    res.status(404).json({ message: "Product is empty" });
  }

}

export default getListProductController;


