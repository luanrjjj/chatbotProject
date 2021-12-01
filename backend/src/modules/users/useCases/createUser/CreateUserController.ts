import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async execute(request: Request, response: Response) {
    console.log('request',request.body)
    const { user_cpf, user_name,user_password,user_phone,user_surname } = request.body;
    
    console.log('dsds',request.body.user_cpf)
    const createUser = container.resolve(CreateUserUseCase);

    const User = await createUser.execute({
      user_phone,
      user_cpf,
      user_name,
      user_surname,
      user_password
  
    });


    return response.json(User);
  }
}
