import { searchService } from "../../services/search.service.js";

export async function searchQueryName (req, res) {
    const { query } = req.query;

    const products = await searchService(query);

    return res.status(200).send(products);
}