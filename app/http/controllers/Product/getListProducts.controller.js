import GetListProductsService    from "../../services/product.service.js"

export async function getListProductController(req, res) {
  try {
    const products = await GetListProductsService();
    let page = req.query.page || 1;
    let limit = req.query.limit || 10;
    const pageCount = Math.ceil(products.length / limit);
    if (page > pageCount) {
      page = pageCount
    }
    const offset = page * limit - limit;
    if (products.length > 0) {
      res.status(200).json({
        "page": page,
        "pageCount": pageCount,
        "data": products.slice(offset, offset + limit)
      });
    } else {
      res.status(404).json({ message: "Product is empty" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}




