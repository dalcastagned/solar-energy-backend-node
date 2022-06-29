import { IPlantRepository } from '../IPlantRepository';
import { Plant } from '../../entities/Plant';
import { PlantModel } from '../../models/Plant';
import { GetAllPlantsDTO } from '../../useCases/GetAllPlants/GetAllPlantsDTO';
import { GetCountsDTO } from '../../useCases/GetCounts/GetCountsDTO';

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

  async update(plant: Plant): Promise<Plant> {
    const updatedPlant = await PlantModel.findByIdAndUpdate(plant._id, plant);
    return updatedPlant;
  }

  async getAll(page: number, limit: number, filter: string): Promise<GetAllPlantsDTO> {
    const options = {
      page: page,
      limit: limit,
    };
    var filterRegExp = new RegExp(filter, 'i');
    const plants = await PlantModel.paginate(
      {
        $or: [
          { nickname: { $regex: filterRegExp } },
          { brand: { $regex: filterRegExp } },
          { place: { $regex: filterRegExp } },
          { model: { $regex: filterRegExp } },
        ],
      },
      options,
      function (_, result) {
        return result;
      },
    );
    return new GetAllPlantsDTO(plants.docs, plants.totalPages, plants.page);
  }

  async getCounts(): Promise<GetCountsDTO> {
    const activePlants = await PlantModel.countDocuments({ active: true });
    const inactivePlants = await PlantModel.countDocuments({ active: false });
    return new GetCountsDTO(activePlants, inactivePlants);
  }
}
