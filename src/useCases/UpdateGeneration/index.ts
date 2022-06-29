import { GenerationRepository } from '../../repositories/implementations/GenerationRepository';
import { UpdateGenerationUseCase } from './UpdateGenerationUseCase';
import { UpdateGenerationController } from './UpdateGenerationController';
import { PlantRepository } from '../../repositories/implementations/PlantRepository';
import { GetPlantUseCase } from '../GetPlantById/GetPlantByIdUseCase';

const generationRepository = new GenerationRepository();
const plantRepository = new PlantRepository();
const updateGenerationUseCase = new UpdateGenerationUseCase(generationRepository);
const getPlantUseCase = new GetPlantUseCase(plantRepository);
const updateGenerationController = new UpdateGenerationController(
  updateGenerationUseCase,
  getPlantUseCase,
);

export { updateGenerationController };
