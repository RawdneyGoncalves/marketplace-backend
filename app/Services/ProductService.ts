import { IProductService } from 'App/Interfaces/IProductService';
import ProductRepository from 'App/Repositories/ProductRepository';
import Product from 'App/Models/Product';

export default class ProductService implements IProductService {
  private productRepository = new ProductRepository();

  public async listProducts(): Promise<Product[]> {
    return this.productRepository.findAll();
  }

  public async getProductDetails(id: string): Promise<Product | null> {
    return this.productRepository.findById(Number(id));
  }

  public async addProduct(data: Partial<Product>): Promise<Product> {
    return this.productRepository.create(data);
  }
  
  public async updateProduct(id: string, data: Partial<Product>): Promise<Product> {
    const product = await this.productRepository.findById(Number(id));
    if (!product) {
      throw new Error('Produto não encontrado');
    }
    await Product.query().where('id', id).update(data);
    return this.productRepository.findById(Number(id)) as Promise<Product>;
  }
  
  public async adjustStock(productId: string, quantity: number): Promise<Product> {
    return this.productRepository.updateStock(Number(productId), quantity);
  }

  public async deleteProduct(id: string): Promise<void> {
    await this.productRepository.delete(Number(id));
  }
}