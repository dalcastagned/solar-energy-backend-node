import { IUserRepository } from '../IUserRepository';
import { User } from '../../entities/User';
import { UserModel } from '../../models/User';

export class UserRepository implements IUserRepository {
  async getByEmail(email: string): Promise<User> {
    return UserModel.findOne({ email });
  }

  async create(user: User): Promise<User> {
    const newUser = new UserModel(user);
    return newUser.save();
  }

  async login(email: string, password: string): Promise<User> {
    return UserModel.findOne({ email, password });
  }
}
