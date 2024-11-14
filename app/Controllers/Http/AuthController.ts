import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import UserService from 'App/Services/UserService';

export default class AuthController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public async register({ request, auth }: HttpContextContract) {
    const { email, password, name } = request.only(['email', 'password', 'name']);
    const user = await this.userService.createUser({ email, password, name });
    const token = await auth.use('api').generate(user);

    return { user, token };
  }

  public async login({ request, auth }: HttpContextContract) {
    const { email, password } = request.all();
    const user = await this.userService.findUserByEmail(email);

    if (!user || !(await user.verifyPassword(password))) {
      return { error: 'Invalid email or password' };
    }

    const token = await auth.use('api').generate(user);
    return { token };
  }
}