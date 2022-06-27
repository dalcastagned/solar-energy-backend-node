import { IPlantRepository } from '../../repositories/IPlantRepository';
import { GetAllPlantsDTO } from './GetAllPlantsDTO';

export class GetAllPlantsUseCase {
  private plantRepository: IPlantRepository;

  constructor(plantRepository: IPlantRepository) {
    this.plantRepository = plantRepository;
  }

  public async execute(page: number, limit: number, filter: string): Promise<GetAllPlantsDTO> {
    return this.plantRepository.getAll(page, limit, filter);
  }
}
