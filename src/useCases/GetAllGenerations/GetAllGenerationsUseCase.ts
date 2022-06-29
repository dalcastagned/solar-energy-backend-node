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
  ): Promise<GetAllGenerationsDTO> {
    return this.generationRepository.getAll(plantId, page, limit);
  }
}
