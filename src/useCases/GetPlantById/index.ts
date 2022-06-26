import { PlantRepository } from '../../repositories/implementations/PlantRepository';
import { GetPlantUseCase } from './GetPlantByIdUseCase';
import { GetPlantController } from './GetPlantByIdController';

const plantRepository = new PlantRepository();
const getPlantUseCase = new GetPlantUseCase(plantRepository);
const getPlantController = new GetPlantController(getPlantUseCase);

export { getPlantController };
