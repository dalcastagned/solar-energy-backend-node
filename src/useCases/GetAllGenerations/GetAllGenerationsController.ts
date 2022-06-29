import { Request, Response } from 'express';
import { GetPlantUseCase } from '../GetPlantById/GetPlantByIdUseCase';
import { GetAllGenerationsUseCase } from './GetAllGenerationsUseCase';

export class GetAllGenerationsController {
  constructor(
    private getAllGenerationsUseCase: GetAllGenerationsUseCase,
    private getPlantUseCase: GetPlantUseCase,
  ) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const page = (request.query.page && parseInt(request.query.page.toString(), 10)) || 1;
    const limit = (request.query.limit && parseInt(request.query.limit.toString())) || 10;
    const plantId = request.params.plantId;
    const plant = await this.getPlantUseCase.execute(plantId);

    if (!plant) {
      return response.status(404).json({
        error: `Plant with id ${plantId} not found`,
      });
    }
    try {
      const generations = await this.getAllGenerationsUseCase.execute(plantId, page, limit);
      return response.json(generations);
    } catch (error) {
      return response.status(400).json({
        error: `Error getting generations: ${error.message}`,
      });
    }
  }
}
