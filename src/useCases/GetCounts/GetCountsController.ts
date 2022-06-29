import { Request, Response } from 'express';
import { GetCountsUseCase } from './GetCountsUseCase';

export class GetCountsController {
  constructor(private getCountsUseCase: GetCountsUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const result = await this.getCountsUseCase.execute();
    return response.status(200).json(result);
  }
}
