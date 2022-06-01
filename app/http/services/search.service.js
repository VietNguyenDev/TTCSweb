import ProductModel from '../models/product.model.js';

export async function searchService (query) {
    const products = await ProductModel.query().wwhere('name', 'like', `%${query}%`);

    return products;
}