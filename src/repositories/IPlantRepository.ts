import { Plant } from '../entities/Plant';
import { GetAllPlantsDTO } from '../useCases/GetAllPlants/GetAllPlantsDTO';
import { GetCountsDTO } from '../useCases/GetCounts/GetCountsDTO';

export interface IPlantRepository {
  getById(id: string): Promise<Plant>;
  create(plant: Plant): Promise<Plant>;
  remove(id: string): Promise<void>;
  update(plant: Plant): Promise<Plant>;
  getAll(page: number, limit: number, filter: string): Promise<GetAllPlantsDTO>;
  getCounts(): Promise<GetCountsDTO>;
}
