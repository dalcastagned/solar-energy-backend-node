import { IGenerationRepository } from '../IGenerationRepository';
import { Generation } from '../../entities/Generation';
import { GenerationModel } from '../../models/Generation';
import { GetAllGenerationsDTO } from '../../useCases/GetAllGenerations/GetAllGenerationsDTO';

export class GenerationRepository implements IGenerationRepository {
  async create(generation: Generation): Promise<Generation> {
    const newGeneration = new GenerationModel(generation);
    return newGeneration.save();
  }

  async getAll(plantId: string, page: number, limit: number): Promise<GetAllGenerationsDTO> {
    const options = {
      page: page,
      limit: limit,
      select: '_id date generatePower',
    };
    var plantIdRegExp = new RegExp(plantId, 'i');
    const generations = await GenerationModel.paginate(
      {
        plantId: { $regex: plantIdRegExp },
      },
      options,
      function (_, result) {
        return result;
      },
    );
    return new GetAllGenerationsDTO(generations.docs, generations.totalPages, generations.page);
  }

  async getById(id: string): Promise<Generation> {
    return GenerationModel.findById(id, '_id date generatePower');
  }

  async remove(id: string): Promise<void> {
    await GenerationModel.findByIdAndDelete(id);
  }
}
