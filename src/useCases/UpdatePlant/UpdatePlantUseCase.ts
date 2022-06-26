import { Plant } from '../../entities/Plant';
import { IPlantRepository } from '../../repositories/IPlantRepository';
import { IUpdatePlantDTO } from './UpdatePlantDTO';

export class UpdatePlantUseCase {
  private plantRepository: IPlantRepository;

  constructor(plantRepository: IPlantRepository) {
    this.plantRepository = plantRepository;
  }

  public async execute(id: string, updatePlantDTO: IUpdatePlantDTO): Promise<Plant> {
    const plant = await this.plantRepository.getById(id);
    if (!plant) {
      throw new Error('Plant not found');
    }
    Object.assign(plant, updatePlantDTO);
    return this.plantRepository.update(id, plant);
  }
}
