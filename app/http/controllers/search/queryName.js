import { searchService } from "../../services/search.service.js";

export async function searchQueryName(req, res) {
  try {
    const { name } = req.query;
    const products = await searchService(name);
    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
