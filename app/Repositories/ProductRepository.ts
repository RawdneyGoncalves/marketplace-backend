import Product from 'App/Models/Product';

export default class ProductRepository {
  /**
   * Lista todos os produtos, opcionalmente com a categoria.
   */
  public async findAll(preloadCategory: boolean = true): Promise<Product[]> {
    const query = Product.query();
    if (preloadCategory) {
      query.preload('category');
    }
    return await query;
  }

  /**
   * Busca um produto pelo ID, com a opção de pré-carregar a categoria.
   * @param id ID do produto
   * @param preloadCategory Indica se deve pré-carregar a categoria
   */
  public async findById(id: number, preloadCategory: boolean = true): Promise<Product | null> {
    const query = Product.query().where('id', id);
    if (preloadCategory) {
      query.preload('category');
    }
    return await query.first();
  }

  /**
   * Cria um novo produto no banco de dados.
   * @param data Dados do produto
   */
  public async create(data: Partial<Product>): Promise<Product> {
    return await Product.create(data);
  }

  /**
   * Atualiza o estoque de um produto.
   * @param productId ID do produto
   * @param quantity Quantidade a ser ajustada (adicionada ou subtraída)
   */
  public async updateStock(productId: number, quantity: number): Promise<Product> {
    const product = await Product.findOrFail(productId);
    product.stock += quantity;
    await product.save();
    return product;
  }

  /**
   * Deleta um produto pelo ID.
   * @param id ID do produto
   */
  public async delete(id: number): Promise<void> {
    const product = await Product.findOrFail(id);
    await product.delete();
  }
}
