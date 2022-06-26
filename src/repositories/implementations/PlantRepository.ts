import { IPlantRepository } from '../IPlantRepository';
import { Plant } from '../../entities/Plant';
import { PlantModel } from '../../models/Plant';

export class PlantRepository implements IPlantRepository {
  async getById(id: string): Promise<Plant> {
    const plant = await PlantModel.findById(id);
    return plant;
  }

  async create(plant: Plant): Promise<Plant> {
    const newPlant = new PlantModel(plant);
    return newPlant.save();
  }
}
