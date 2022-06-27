import { Plant } from '../../entities/Plant';

export class GetAllPlantsDTO {
  public plants: Plant[];
  public pageCount: number;
  public pageNumber: number;

  constructor(plants: Plant[], pageCount: number, pageNumber: number) {
    this.plants = plants;
    this.pageCount = pageCount;
    this.pageNumber = pageNumber;
  }
}
