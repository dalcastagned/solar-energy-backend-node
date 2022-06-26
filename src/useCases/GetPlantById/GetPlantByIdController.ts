import { Request, Response } from 'express';
import { GetPlantUseCase } from './GetPlantByIdUseCase';

export class GetPlantController {
  constructor(private getPlantUseCase: GetPlantUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const id = request.params.id;
    try {
      const plant = await this.getPlantUseCase.execute(id);
      return response.json(plant);
    } catch (error) {
      return response.status(404).json({
        error: `Plant not found: ${error.message}`,
      });
    }
  }
}
