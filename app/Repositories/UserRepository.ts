import User from 'App/Models/User';
import { IUserRepository } from 'App/Interfaces/IUserRepository';

export default class UserRepository implements IUserRepository {
  public async findAll(): Promise<User[]> {
    return await User.all();
  }

  public async findById(id: number): Promise<User | null> {
    return await User.find(id);
  }

  public async findByEmail(email: string): Promise<User | null> {
    return await User.findBy('email', email);
  }

  public async create(data: Partial<User>): Promise<User> {
    return await User.create(data);
  }

  public async update(id: number, data: Partial<User>): Promise<User> {
    const user = await User.findOrFail(id);
    user.merge(data);
    await user.save();
    return user;
  }

  public async delete(id: number): Promise<void> {
    const user = await User.findOrFail(id);
    await user.delete();
  }
}