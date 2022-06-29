import { Request, Response } from 'express';
import { GetPlantUseCase } from '../GetPlantById/GetPlantByIdUseCase';
import { GetGenerationUseCase } from './GetGenerationByIdUseCase';

export class GetGenerationController {
  constructor(
    private getGenerationUseCase: GetGenerationUseCase,
    private getPlantUseCase: GetPlantUseCase,
  ) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const generationId = request.params.generationId;
    const plantId = request.params.plantId;
    const plant = await this.getPlantUseCase.execute(plantId);

    if (!plant) {
      return response.status(404).json({
        error: `Plant with id ${plantId} not found`,
      });
    }
    try {
      const generation = await this.getGenerationUseCase.execute(generationId);
      if (!generation) {
        return response.status(404).json({
          error: `Generation with id ${generationId} not found`,
        });
      }
      return response.json(generation);
    } catch (error) {
      return response.status(400).json({
        error: `Error getting generation: ${error.message}`,
      });
    }
  }
}
