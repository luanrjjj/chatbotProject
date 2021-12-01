import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {
  async execute(request: Request, response: Response) {
    const { user_cpf} = request.body;
    
    const deleteUser = container.resolve(DeleteUserUseCase);

    const User = await deleteUser.execute(user_cpf);


    return response.json(User);
  }
}
