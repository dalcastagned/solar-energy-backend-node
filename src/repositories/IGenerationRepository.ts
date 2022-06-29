import { Generation } from '../entities/Generation';

export interface IGenerationRepository {
  create(generation: Generation): Promise<Generation>;
}
