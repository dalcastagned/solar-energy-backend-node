import { Request, Response } from 'express';
import { RemovePlantUseCase } from './RemovePlantUseCase';

export class RemovePlantController {
  constructor(private removePlantUseCase: RemovePlantUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const id = request.params.id;
    try {
      await this.removePlantUseCase.execute(id);
      return response.status(204).json();
    } catch (error) {
      return response.status(400).json({
        error: `Error removing plant: ${error.message}`,
      });
    }
  }
}
