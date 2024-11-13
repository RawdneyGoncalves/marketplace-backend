import { IUserRepository } from 'App/Interfaces/IUserRepository';
import UserRepository from 'App/Repositories/UserRepository';

export default class UserService {
  private userRepository: IUserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public async findUserById(id: string) {
    return this.userRepository.findById(id);
  }

  public async findUserByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }
}
