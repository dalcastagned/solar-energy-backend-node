import { User } from '../../entities/User';
import { IUserRepository } from '../../repositories/IUserRepository';
import { ILoginDTO } from './LoginDTO';
import bcrypt from 'bcryptjs';
import { UserModel } from '../../models/User';

export class LoginUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(userData: ILoginDTO): Promise<User> {
    const user = await this.userRepository.getByEmail(userData.email);

    if (!user) {
      throw new Error('User not found.');
    }

    const passwordMatch = await bcrypt.compare(userData.password, user.password);

    if (!passwordMatch) {
      throw new Error('Password does not match.');
    }

    return user;
  }
}
