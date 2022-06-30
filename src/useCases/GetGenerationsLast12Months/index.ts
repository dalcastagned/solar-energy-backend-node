import { GenerationRepository } from '../../repositories/implementations/GenerationRepository';
import { GetGenerationsLast12MonthsUseCase } from './GetGenerationsLast12MonthsUseCase';
import { GetGenerationsLast12MonthsController } from './GetGenerationsLast12MonthsController';

const generationRepository = new GenerationRepository();
const getGenerationsLast12MonthsUseCase = new GetGenerationsLast12MonthsUseCase(
  generationRepository,
);
const getGenerationsLast12MonthsController = new GetGenerationsLast12MonthsController(
  getGenerationsLast12MonthsUseCase,
);

export { getGenerationsLast12MonthsController };
