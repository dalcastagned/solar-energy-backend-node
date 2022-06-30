import { User } from '../../entities/User';
import { IUserRepository } from '../../repositories/IUserRepository';
import { ICreateUserDTO } from './CreateUserDTO';

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(userData: ICreateUserDTO): Promise<User> {
    const user = await this.userRepository.getByEmail(userData.email);

    if (user) {
      throw new Error('User already exists.');
    }

    const newUser = new User(userData);

    return this.userRepository.create(newUser);
  }
}
