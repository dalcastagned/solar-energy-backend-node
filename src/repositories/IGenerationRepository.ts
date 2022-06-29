import { Generation } from '../entities/Generation';
import { GetAllGenerationsDTO } from '../useCases/GetAllGenerations/GetAllGenerationsDTO';

export interface IGenerationRepository {
  create(generation: Generation): Promise<Generation>;
  getAll(plantId: string, page: number, limit: number): Promise<GetAllGenerationsDTO>;
  getById(id: string): Promise<Generation>;
  remove(id: string): Promise<void>;
  update(generation: Generation): Promise<Generation>;
}
