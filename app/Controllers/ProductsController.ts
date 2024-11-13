import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Product from 'App/Models/Product';

export default class ProductsController {
  public async list({}: HttpContextContract) {
    return Product.query().preload('category');
  }

  public async show({ params }: HttpContextContract) {
    return Product.findOrFail(params.id);
  }

  public async create({ request }: HttpContextContract) {
    const data = request.only(['name', 'price', 'categoryId', 'stock']);
    return Product.create(data);
  }

  public async updateStock({ params, request }: HttpContextContract) {
    const product = await Product.findOrFail(params.id);
    product.stock += request.input('quantity');
    await product.save();

    return product;
  }
}
