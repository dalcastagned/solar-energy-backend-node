import { PlantRepository } from '../../repositories/implementations/PlantRepository';
import { RemovePlantUseCase } from './RemovePlantUseCase';
import { RemovePlantController } from './RemovePlantController';

const plantRepository = new PlantRepository();
const removePlantUseCase = new RemovePlantUseCase(plantRepository);
const removePlantController = new RemovePlantController(removePlantUseCase);

export { removePlantController };
