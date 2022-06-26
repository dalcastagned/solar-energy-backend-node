import { Request, Response } from 'express';
import { CreatePlantUseCase } from './CreatePlantUseCase';

export class CreatePlantController {
  constructor(private createPlantUseCase: CreatePlantUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const plant = await this.createPlantUseCase.execute(request.body);
      return response.status(201).json(plant.id);
    } catch (error) {
      return response.status(400).json({
        error: `Error creating plant: ${error.message}`,
      });
    }
  }
}
