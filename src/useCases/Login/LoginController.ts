import { Request, Response } from 'express';
import { generateToken } from '../../utils/generateToken';
import { LoginUseCase } from './LoginUseCase';

export class LoginController {
  constructor(private loginUseCase: LoginUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    try {
      const user = await this.loginUseCase.execute({ email, password });
      return response
        .status(200)
        .json({ user: user.email, token: generateToken(user.email, user._id) });
    } catch (error) {
      return response.status(400).json({
        error: `Error logging in: ${error.message}`,
      });
    }
  }
}
