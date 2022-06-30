import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    try {
      const user = await this.createUserUseCase.execute({ email, password });
      return response.status(201).json({ user: user.email });
    } catch (error) {
      return response.status(400).json({
        error: `Error creating user: ${error.message}`,
      });
    }
  }
}
