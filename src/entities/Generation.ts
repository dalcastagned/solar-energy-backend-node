import { v4 as uuidv4 } from 'uuid';

export class Generation {
  public _id: string;
  public date: Date;
  public generatePower: number;

  constructor(props: Omit<Generation, '_id'>, _id?: string) {
    Object.assign(this, props);
    if (!_id) {
      this._id = uuidv4();
    }
  }
}
