export class Plant {
  public id?: string;
  public nickname: string;
  public place: string;
  public brand: string;
  public model: string;
  public active: boolean;

  constructor(props: Omit<Plant, 'id'>) {
    Object.assign(this, props);
  }
}
