import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class UserController {
  public async profile({ auth }: HttpContextContract) {
    return auth.user;
  }
}
