export class Plant {
  public id?: string;
  public nickname: string;
  public place: string;
  public brand: string;
  public model: string;
  public active: boolean;

  constructor(props: Plant) {
    Object.assign(this, props);
  }
}
