import { PlantRepository } from '../../repositories/implementations/PlantRepository';
import { GetCountsUseCase } from './GetCountsUseCase';
import { GetCountsController } from './GetCountsController';

const plantRepository = new PlantRepository();
const getCountsUseCase = new GetCountsUseCase(plantRepository);
const getCountsController = new GetCountsController(getCountsUseCase);

export { getCountsController };
