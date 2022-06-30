import { v4 as uuidv4 } from 'uuid';

export class User {
  public _id: string;
  public email: string;
  public password: string;

  constructor(props: Omit<User, '_id'>, _id?: string) {
    Object.assign(this, props);
    this._id = _id || uuidv4();
  }
}
