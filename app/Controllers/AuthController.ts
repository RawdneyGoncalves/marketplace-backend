import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User';

export default class AuthController {
  public async register({ request, auth }: HttpContextContract) {
    const data = request.only(['email', 'password', 'name']);
    const user = await User.create(data);
    const token = await auth.use('api').generate(user);

    return { user, token };
  }

  public async login({ request, auth }: HttpContextContract) {
    const { email, password } = request.all();
    const token = await auth.use('api').attempt(email, password);

    return { token };
  }
}
