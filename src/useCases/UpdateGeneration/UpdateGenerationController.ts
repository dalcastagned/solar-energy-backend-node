import { Request, Response } from 'express';
import { GetPlantUseCase } from '../GetPlantById/GetPlantByIdUseCase';
import { UpdateGenerationUseCase } from './UpdateGenerationUseCase';

export class UpdateGenerationController {
  constructor(
    private updateGenerationUseCase: UpdateGenerationUseCase,
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
      await this.updateGenerationUseCase.execute(generationId, request.body);
      return response.status(204).json();
    } catch (error) {
      return response.status(400).json({
        error: `Error updating generation: ${error.message}`,
      });
    }
  }
}
