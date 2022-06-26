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

  async remove(id: string): Promise<void> {
    await PlantModel.findByIdAndRemove(id);
  }

  async update(id: string, plant: Plant): Promise<Plant> {
    const updatedPlant = await PlantModel.findByIdAndUpdate(id, plant);
    return updatedPlant;
  }
}
