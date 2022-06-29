import { Generation } from '../../entities/Generation';

export class GetAllGenerationsDTO {
  public generations: Generation[];
  public pageCount: number;
  public pageNumber: number;

  constructor(generations: Generation[], pageCount: number, pageNumber: number) {
    this.generations = generations;
    this.pageCount = pageCount;
    this.pageNumber = pageNumber;
  }
}
