import { PlantRepository } from '../../repositories/implementations/PlantRepository';
import { GetAllPlantsUseCase } from './GetAllPlantsUseCase';
import { GetAllPlantsController } from './GetAllPlantsController';

const plantRepository = new PlantRepository();
const getAllPlantsUseCase = new GetAllPlantsUseCase(plantRepository);
const getAllPlantsController = new GetAllPlantsController(getAllPlantsUseCase);

export { getAllPlantsController };
