import { GenerationRepository } from '../../repositories/implementations/GenerationRepository';
import { RemoveGenerationUseCase } from './RemoveGenerationUseCase';
import { RemoveGenerationController } from './RemoveGenerationController';
import { PlantRepository } from '../../repositories/implementations/PlantRepository';
import { GetPlantUseCase } from '../GetPlantById/GetPlantByIdUseCase';

const generationRepository = new GenerationRepository();
const plantRepository = new PlantRepository();
const removeGenerationUseCase = new RemoveGenerationUseCase(generationRepository);
const getPlantUseCase = new GetPlantUseCase(plantRepository);
const removeGenerationController = new RemoveGenerationController(
  removeGenerationUseCase,
  getPlantUseCase,
);

export { removeGenerationController };
