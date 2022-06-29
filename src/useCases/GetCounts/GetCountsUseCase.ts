import { IPlantRepository } from '../../repositories/IPlantRepository';
import { GetCountsDTO } from './GetCountsDTO';

export class GetCountsUseCase {
  private plantRepository: IPlantRepository;

  constructor(plantRepository: IPlantRepository) {
    this.plantRepository = plantRepository;
  }

  public async execute(): Promise<GetCountsDTO> {
    return await this.plantRepository.getCounts();
  }
}
