import { IGenerationRepository } from '../../repositories/IGenerationRepository';
import { GetAllGenerationsDTO } from './GetAllGenerationsDTO';

export class GetAllGenerationsUseCase {
  private generationRepository: IGenerationRepository;

  constructor(generationRepository: IGenerationRepository) {
    this.generationRepository = generationRepository;
  }

  public async execute(
    plantId: string,
    page: number,
    limit: number,
    startDate?: Date,
    endDate?: Date,
  ): Promise<GetAllGenerationsDTO> {
    return this.generationRepository.getAll(plantId, page, limit, startDate, endDate);
  }
}
