import { Request, Response } from 'express';
import { GetGenerationsLast12MonthsUseCase } from './GetGenerationsLast12MonthsUseCase';

export class GetGenerationsLast12MonthsController {
  constructor(private getGenerationsLast12MonthsUseCase: GetGenerationsLast12MonthsUseCase) {}

  public async handle(_: Request, response: Response): Promise<Response> {
    const generations = await this.getGenerationsLast12MonthsUseCase.execute();
    return response.status(200).json(generations);
  }
}
