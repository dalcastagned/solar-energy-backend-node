import { IGenerationRepository } from '../../repositories/IGenerationRepository';
import { GetGenerationsLast12MonthsDTO } from './GetGenerationsLast12MonthsDTO';

export class GetGenerationsLast12MonthsUseCase {
  private generationRepository: IGenerationRepository;

  constructor(generationRepository: IGenerationRepository) {
    this.generationRepository = generationRepository;
  }

  public async execute(): Promise<GetGenerationsLast12MonthsDTO[]> {
    return this.generationRepository.generationsLast12Months();
  }
}
