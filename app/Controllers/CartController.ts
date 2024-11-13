import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import CartItem from 'App/Models/CartItem';

export default class CartController {
  public async addItem({ request, auth }: HttpContextContract) {
    const { productId, quantity } = request.all();
    const user = auth.user!;

    const cartItem = await CartItem.create({ userId: user.id, productId, quantity });

    return cartItem;
  }

  public async removeItem({ params, auth }: HttpContextContract) {
    const user = auth.user!;
    const item = await CartItem.query()
      .where('user_id', user.id)
      .where('id', params.id)
      .firstOrFail();

    await item.delete();
    return { message: 'Item removed' };
  }

  public async viewCart({ auth }: HttpContextContract) {
    const user = auth.user!;
    return await CartItem.query().where('user_id', user.id).preload('product');
  }
}
