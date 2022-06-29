import { GenerationRepository } from '../../repositories/implementations/GenerationRepository';
import { CreateGenerationUseCase } from './CreateGenerationUseCase';
import { CreateGenerationController } from './CreateGenerationController';
import { GetPlantUseCase } from '../GetPlantById/GetPlantByIdUseCase';
import { PlantRepository } from '../../repositories/implementations/PlantRepository';

const generationRepository = new GenerationRepository();
const plantRepository = new PlantRepository();
const createGenerationUseCase = new CreateGenerationUseCase(generationRepository);
const getPlantUseCase = new GetPlantUseCase(plantRepository);
const createGenerationController = new CreateGenerationController(
  createGenerationUseCase,
  getPlantUseCase,
);

export { createGenerationController };
