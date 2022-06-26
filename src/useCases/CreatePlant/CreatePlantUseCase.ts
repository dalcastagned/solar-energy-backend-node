import { Plant } from '../../entities/Plant';
import { IPlantRepository } from '../../repositories/IPlantRepository';
import { ICreatePlantDTO } from './CreatePlantDTO';

export class CreatePlantUseCase {
  private plantRepository: IPlantRepository;

  constructor(plantRepository: IPlantRepository) {
    this.plantRepository = plantRepository;
  }

  public async execute(createPlantDTO: ICreatePlantDTO): Promise<Plant> {
    const plant = new Plant(createPlantDTO);
    return this.plantRepository.create(plant);
  }
}
