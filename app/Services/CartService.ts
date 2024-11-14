import CartItem from 'App/Models/CartItem';

export default class CartService {
  public async addItem(userId: number, productId: number, quantity: number): Promise<CartItem> {
    return await CartItem.create({ userId, productId, quantity });
  }

  public async removeItem(userId: number, itemId: number): Promise<void> {
    const item = await CartItem.query().where('user_id', userId).where('id', itemId).firstOrFail();
    await item.delete();
  }

  public async getCart(userId: number): Promise<CartItem[]> {
    return await CartItem.query().where('user_id', userId).preload('product');
  }
}