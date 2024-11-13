import { IProductService } from 'App/Interfaces/IProductService';
import ProductRepository from 'App/Repositories/ProductRepository';

export default class ProductService implements IProductService {
  private productRepository = new ProductRepository();

  public async listProducts() {
    return this.productRepository.findAll();
  }

  public async getProductDetails(id: string) {
    return this.productRepository.findById(Number(id));
  }

  public async addProduct(data: Partial<any>) {
    return this.productRepository.create(data);
  }

  public async adjustStock(productId: string, quantity: number) {
    return this.productRepository.updateStock(Number(productId), quantity);
  }
}
