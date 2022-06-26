import { Request, Response } from 'express';
import { UpdatePlantUseCase } from './UpdatePlantUseCase';

export class UpdatePlantController {
  constructor(private updatePlantUseCase: UpdatePlantUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const id = request.params.id;
    try {
      await this.updatePlantUseCase.execute(id, request.body);
      return response.status(204).json();
    } catch (error) {
      return response.status(400).json({
        error: `Error updating plant: ${error.message}`,
      });
    }
  }
}
