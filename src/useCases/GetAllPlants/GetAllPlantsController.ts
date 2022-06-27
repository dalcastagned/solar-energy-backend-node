import { Request, Response } from 'express';
import { GetAllPlantsUseCase } from './GetAllPlantsUseCase';

export class GetAllPlantsController {
  constructor(private getAllPlantsUseCase: GetAllPlantsUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const page = (request.query.page && parseInt(request.query.page.toString(), 10)) || 1;
    const limit = (request.query.limit && parseInt(request.query.limit.toString())) || 10;
    const filter = (request.query.filter && request.query.filter.toString()) || '';
    try {
      const plants = await this.getAllPlantsUseCase.execute(page, limit, filter);
      return response.json(plants);
    } catch (error) {
      return response.status(400).json({
        error: `Error getting plants: ${error.message}`,
      });
    }
  }
}
