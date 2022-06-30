import { User } from '../entities/User';

export interface IUserRepository {
  getByEmail(email: string): Promise<User>;
  create(user: User): Promise<User>;
}
