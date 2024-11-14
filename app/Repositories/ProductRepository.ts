import Product from 'App/Models/Product';

export default class ProductRepository {
  private transformToDTO(product: Product): Product {
    return product;
  }

  public async findAll(): Promise<Product[]> {
    const products = await Product.all();
    return products.map(product => this.transformToDTO(product));
  }

  public async findById(id: number): Promise<Product | null> {
    const product = await Product.find(id);
    return product ? this.transformToDTO(product) : null;
  }

  public async create(data: Partial<Product>): Promise<Product> {
    const product = await Product.create(data);
    return this.transformToDTO(product);
  }

  public async update(id: number, data: Partial<Product>): Promise<void> {
    const product = await Product.findOrFail(id);
    Object.assign(product, data);
    await product.save();
  }

  public async updateStock(productId: number, quantity: number): Promise<Product> {
    const product = await Product.findOrFail(productId);
    product.stock += quantity;
    await product.save();
    return this.transformToDTO(product);
  }

  public async delete(id: number): Promise<void> {
    const product = await Product.find(id);
    if (!product) {
      throw new Error('Produto não encontrado');
    }
    await product.delete();
  }
}