import { Generation } from '../../entities/Generation';
import { IGenerationRepository } from '../../repositories/IGenerationRepository';
import { IUpdateGenerationDTO } from './UpdateGenerationDTO';

export class UpdateGenerationUseCase {
  private generationRepository: IGenerationRepository;

  constructor(generationRepository: IGenerationRepository) {
    this.generationRepository = generationRepository;
  }

  public async execute(id: string, updateGenerationDTO: IUpdateGenerationDTO): Promise<Generation> {
    const Generation = await this.generationRepository.getById(id);
    if (!Generation) {
      throw new Error('Generation not found');
    }
    Object.assign(Generation, updateGenerationDTO);
    return this.generationRepository.update(Generation);
  }
}
