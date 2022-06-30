import { IGenerationRepository } from '../IGenerationRepository';
import { Generation } from '../../entities/Generation';
import { GenerationModel } from '../../models/Generation';
import { GetAllGenerationsDTO } from '../../useCases/GetAllGenerations/GetAllGenerationsDTO';
import { GetGenerationsLast12MonthsDTO } from '../../useCases/GetGenerationsLast12Months/GetGenerationsLast12MonthsDTO';

export class GenerationRepository implements IGenerationRepository {
  async create(generation: Generation): Promise<Generation> {
    const newGeneration = new GenerationModel(generation);
    return newGeneration.save();
  }

  async getAll(
    plantId: string,
    page: number,
    limit: number,
    startDate?: Date,
    endDate?: Date,
  ): Promise<GetAllGenerationsDTO> {
    const options = {
      page: page,
      limit: limit,
    };

    var plantIdRegExp = new RegExp(plantId, 'i');
    const generations = await GenerationModel.paginate(
      {
        $and: [
          { plantId: { $regex: plantIdRegExp } },
          startDate ? { date: { $gte: startDate } } : {},
          endDate ? { date: { $lte: endDate } } : {},
        ],
      },
      options,
      function (_, result) {
        return result;
      },
    );
    return new GetAllGenerationsDTO(generations.docs, generations.totalPages, generations.page);
  }

  async getById(id: string): Promise<Generation> {
    return GenerationModel.findById(id);
  }

  async remove(id: string): Promise<void> {
    await GenerationModel.findByIdAndDelete(id);
  }

  async update(generation: Generation): Promise<Generation> {
    return GenerationModel.findByIdAndUpdate(generation._id, generation);
  }

  async generationsLast12Months(): Promise<GetGenerationsLast12MonthsDTO[]> {
    const now = new Date();
    const last12Month = new Date(now.getFullYear(), now.getMonth() - 11, 1);
    const generations = await GenerationModel.find({
      date: { $gte: last12Month },
    });
    const generationsLast12Months = [];

    for (let i = last12Month; i <= now; i.setMonth(i.getMonth() + 1)) {
      const month = i.getMonth();
      const monthGenerations = generations.filter(
        generation => generation.date.getMonth() === month,
      );
      const monthGenerationsSum = monthGenerations.reduce(
        (acc, generation) => acc + generation.generatePower,
        0,
      );
      const monthGenerationsDTO = new GetGenerationsLast12MonthsDTO(
        `${month + 1 < 10 ? '0' + (month + 1) : month + 1}/${i.getFullYear().toString().slice(-2)}`,
        monthGenerationsSum,
      );
      generationsLast12Months.push(monthGenerationsDTO);
    }
    return generationsLast12Months;
  }
}
