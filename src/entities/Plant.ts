import { Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export class Plant {
  public _id: string;
  public nickname: string;
  public place: string;
  public brand: string;
  public model: string;
  public active: boolean;

  constructor(props: Omit<Plant, '_id'>, _id?: string) {
    Object.assign(this, props);
    if (!_id) {
      this._id = uuidv4();
    }
  }
}
