import { GenerationRepository } from '../../repositories/implementations/GenerationRepository';
import { GetGenerationUseCase } from './GetGenerationByIdUseCase';
import { GetGenerationController } from './GetGenerationByIdController';
import { PlantRepository } from '../../repositories/implementations/PlantRepository';
import { GetPlantUseCase } from '../GetPlantById/GetPlantByIdUseCase';

const generationRepository = new GenerationRepository();
const plantRepository = new PlantRepository();
const getGenerationUseCase = new GetGenerationUseCase(generationRepository);
const getPlantUseCase = new GetPlantUseCase(plantRepository);
const getGenerationController = new GetGenerationController(getGenerationUseCase, getPlantUseCase);

export { getGenerationController };
