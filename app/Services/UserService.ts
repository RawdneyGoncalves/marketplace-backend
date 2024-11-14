import { IUserRepository } from 'App/Interfaces/IUserRepository';
import UserRepository from 'App/Repositories/UserRepository';
import User from 'App/Models/User';
import Hash from '@ioc:Adonis/Core/Hash';

export default class UserService {
  private userRepository: IUserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public async findUserById(id: string): Promise<User | null> {
    return this.userRepository.findById(Number(id));
  }

  public async findUserByEmail(email: string): Promise<User | null> {
    return this.userRepository.findByEmail(email);
  }

  public async createUser(data: { email: string; password: string; name: string }): Promise<User> {
    const { email, password, name } = data;
    const hashedPassword = await Hash.make(password);
    return this.userRepository.create({ email, password: hashedPassword, name });
  }
}