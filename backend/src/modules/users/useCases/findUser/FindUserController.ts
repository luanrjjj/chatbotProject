import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindUserUseCase } from "./FindUserUseCase";

export class FindUserController {
  async execute(request: Request, response: Response) {
    const { user_cpf} = request.body;
    
    const findUser = container.resolve(FindUserUseCase);

    const User = await findUser.execute(user_cpf);


    return response.json(User);
  }
}
