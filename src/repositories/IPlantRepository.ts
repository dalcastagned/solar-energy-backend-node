import { Plant } from '../entities/Plant';

export interface IPlantRepository {
  getById(id: string): Promise<Plant>;
  create(plant: Plant): Promise<Plant>;
}
