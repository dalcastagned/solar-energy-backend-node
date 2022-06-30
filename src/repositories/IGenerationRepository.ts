import { Generation } from '../entities/Generation';
import { GetAllGenerationsDTO } from '../useCases/GetAllGenerations/GetAllGenerationsDTO';
import { GetGenerationsLast12MonthsDTO } from '../useCases/GetGenerationsLast12Months/GetGenerationsLast12MonthsDTO';

export interface IGenerationRepository {
  create(generation: Generation): Promise<Generation>;
  getAll(plantId: string, page: number, limit: number): Promise<GetAllGenerationsDTO>;
  getById(id: string): Promise<Generation>;
  remove(id: string): Promise<void>;
  update(generation: Generation): Promise<Generation>;
  generationsLast12Months(): Promise<GetGenerationsLast12MonthsDTO[]>;
}
