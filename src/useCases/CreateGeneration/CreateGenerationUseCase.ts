import { Generation } from '../../entities/Generation';
import { IGenerationRepository } from '../../repositories/IGenerationRepository';
import { ICreateGenerationDTO } from './CreateGenerationDTO';

export class CreateGenerationUseCase {
  private generationRepository: IGenerationRepository;

  constructor(generationRepository: IGenerationRepository) {
    this.generationRepository = generationRepository;
  }

  public async execute(createGenerationDTO: ICreateGenerationDTO): Promise<Generation> {
    const generation = new Generation(createGenerationDTO);
    return this.generationRepository.create(generation);
  }
}
