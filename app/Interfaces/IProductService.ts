import Product from 'App/Models/Product';

export interface IProductService {
  listProducts(): Promise<Product[]>;
  getProductDetails(id: string): Promise<Product | null>;
  addProduct(data: Partial<Product>): Promise<Product>;
  updateProduct(id: string, data: Partial<Product>): Promise<Product>;
  adjustStock(productId: string, quantity: number): Promise<Product>;
  deleteProduct(id: string): Promise<void>;
}