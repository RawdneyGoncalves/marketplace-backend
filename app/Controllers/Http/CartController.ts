import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

import CartService from 'App/Services/CartService';

export default class CartController {
  private cartService: CartService;

  constructor() {
    this.cartService = new CartService();
  }

  public async addItem({ request, auth }: HttpContextContract) {
    const { productId, quantity } = request.all();
    const user = auth.user!;
    return await this.cartService.addItem(user.id, productId, quantity);
  }

  public async removeItem({ params, auth }: HttpContextContract) {
    const user = auth.user!;
    await this.cartService.removeItem(user.id, params.id);
    return { message: 'Item removed' };
  }

  public async viewCart({ auth }: HttpContextContract) {
    const user = auth.user!;
    return await this.cartService.getCart(user.id);
  }
}