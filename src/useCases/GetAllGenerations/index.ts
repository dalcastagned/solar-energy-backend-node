import { GenerationRepository } from '../../repositories/implementations/GenerationRepository';
import { GetAllGenerationsUseCase } from './GetAllGenerationsUseCase';
import { GetAllGenerationsController } from './GetAllGenerationsController';
import { PlantRepository } from '../../repositories/implementations/PlantRepository';
import { GetPlantUseCase } from '../GetPlantById/GetPlantByIdUseCase';

const generationRepository = new GenerationRepository();
const plantRepository = new PlantRepository();
const getAllGenerationsUseCase = new GetAllGenerationsUseCase(generationRepository);
const getPlantUseCase = new GetPlantUseCase(plantRepository);
const getAllGenerationsController = new GetAllGenerationsController(
  getAllGenerationsUseCase,
  getPlantUseCase,
);

export { getAllGenerationsController };
