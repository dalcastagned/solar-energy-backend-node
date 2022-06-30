export class GetGenerationsLast12MonthsDTO {
  public month: string;
  public generation: number;

  constructor(month: string, generation: number) {
    this.month = month;
    this.generation = generation;
  }
}
