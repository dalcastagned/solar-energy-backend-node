import { IPlantRepository } from '../../repositories/IPlantRepository';

export class RemovePlantUseCase {
  private plantRepository: IPlantRepository;

  constructor(plantRepository: IPlantRepository) {
    this.plantRepository = plantRepository;
  }

  public async execute(id: string): Promise<void> {
    const plant = await this.plantRepository.getById(id);
    if (!plant) {
      throw new Error('Plant not found');
    }
    return this.plantRepository.remove(id);
  }
}
