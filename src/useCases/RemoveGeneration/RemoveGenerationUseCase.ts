import { IGenerationRepository } from '../../repositories/IGenerationRepository';

export class RemoveGenerationUseCase {
  private generationRepository: IGenerationRepository;

  constructor(generationRepository: IGenerationRepository) {
    this.generationRepository = generationRepository;
  }

  public async execute(id: string): Promise<void> {
    const Generation = await this.generationRepository.getById(id);
    if (!Generation) {
      throw new Error('Generation not found');
    }
    return this.generationRepository.remove(id);
  }
}
