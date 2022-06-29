import { Request, Response } from 'express';
import { GetPlantUseCase } from '../GetPlantById/GetPlantByIdUseCase';
import { RemoveGenerationUseCase } from './RemoveGenerationUseCase';

export class RemoveGenerationController {
  constructor(
    private removeGenerationUseCase: RemoveGenerationUseCase,
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
      await this.removeGenerationUseCase.execute(generationId);
      return response.status(204).json();
    } catch (error) {
      return response.status(400).json({
        error: `Error removing generation: ${error.message}`,
      });
    }
  }
}
