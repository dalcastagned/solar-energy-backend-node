import { Plant } from '../../entities/Plant';
import { IPlantRepository } from '../../repositories/IPlantRepository';

export class GetPlantUseCase {
  private plantRepository: IPlantRepository;

  constructor(plantRepository: IPlantRepository) {
    this.plantRepository = plantRepository;
  }

  public async execute(id: string): Promise<Plant> {
    return this.plantRepository.getById(id);
  }
}
