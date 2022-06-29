import { IGenerationRepository } from '../IGenerationRepository';
import { Generation } from '../../entities/Generation';
import { GenerationModel } from '../../models/Generation';

export class GenerationRepository implements IGenerationRepository {
  async create(generation: Generation): Promise<Generation> {
    const newGeneration = new GenerationModel(generation);
    return newGeneration.save();
  }
}
