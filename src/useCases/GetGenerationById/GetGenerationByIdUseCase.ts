import { Generation } from '../../entities/Generation';
import { IGenerationRepository } from '../../repositories/IGenerationRepository';

export class GetGenerationUseCase {
  private generationRepository: IGenerationRepository;

  constructor(generationRepository: IGenerationRepository) {
    this.generationRepository = generationRepository;
  }

  public async execute(id: string): Promise<Generation> {
    return this.generationRepository.getById(id);
  }
}
