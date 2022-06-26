import { Request, Response } from 'express';
import { GetPlantUseCase } from './GetPlantByIdUseCase';

export class GetPlantController {
  constructor(private getPlantUseCase: GetPlantUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const id = request.params.id;
    try {
      const plant = await this.getPlantUseCase.execute(id);
      if (!plant) {
        return response.status(404).json({
          error: `Plant with id ${id} not found`,
        });
      }
      return response.json(plant);
    } catch (error) {
      return response.status(400).json({
        error: `Error getting plant: ${error.message}`,
      });
    }
  }
}
