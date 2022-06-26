import { PlantRepository } from '../../repositories/implementations/PlantRepository';
import { UpdatePlantUseCase } from './UpdatePlantUseCase';
import { UpdatePlantController } from './UpdatePlantController';

const plantRepository = new PlantRepository();
const updatePlantUseCase = new UpdatePlantUseCase(plantRepository);
const updatePlantController = new UpdatePlantController(updatePlantUseCase);

export { updatePlantController };
