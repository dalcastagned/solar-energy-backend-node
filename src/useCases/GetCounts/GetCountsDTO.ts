export class GetCountsDTO {
  public activePlants: number;
  public inactivePlants: number;

  constructor(activePlants: number, inactivePlants: number) {
    this.activePlants = activePlants;
    this.inactivePlants = inactivePlants;
  }
}
