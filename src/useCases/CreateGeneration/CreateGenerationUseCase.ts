import { Generation } from '../../entities/Generation';
import { IGenerationRepository } from '../../repositories/IGenerationRepository';
import { ICreateGenerationDTO } from './CreateGenerationDTO';

export class CreateGenerationUseCase {
  private generationRepository: IGenerationRepository;

  constructor(generationRepository: IGenerationRepository) {
    this.generationRepository = generationRepository;
  }

  public async execute(
    createGenerationDTO: ICreateGenerationDTO,
    plantId: string,
  ): Promise<Generation> {
    const generation = new Generation(createGenerationDTO, plantId);
    return this.generationRepository.create(generation);
  }
}
