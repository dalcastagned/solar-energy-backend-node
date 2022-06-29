import { Request, Response } from 'express';
import { GetPlantUseCase } from '../GetPlantById/GetPlantByIdUseCase';
import { CreateGenerationUseCase } from './CreateGenerationUseCase';

export class CreateGenerationController {
  constructor(
    private createGenerationUseCase: CreateGenerationUseCase,
    private getPlantUseCase: GetPlantUseCase,
  ) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const plantId = request.params.plantId;
    const plant = await this.getPlantUseCase.execute(plantId);
    if (!plant) {
      return response.status(404).json({
        error: `Plant with id ${plantId} not found`,
      });
    }
    try {
      await this.createGenerationUseCase.execute(request.body);
      return response.status(204).json();
    } catch (error) {
      return response.status(400).json({
        error: `Error creating generation: ${error.message}`,
      });
    }
  }
}
