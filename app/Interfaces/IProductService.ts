export interface IProductService {
    listProducts(): Promise<any[]>;
    getProductDetails(id: string): Promise<any>;
    addProduct(data: Partial<any>): Promise<any>;
    adjustStock(productId: string, quantity: number): Promise<any>;
  }
  