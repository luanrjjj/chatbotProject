import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async execute(request: Request, response: Response) {
    const { user_email, user_cpf, user_name, cart, created_at } = request.body;

    const createUser = container.resolve(CreateUserUseCase);

    const User = await createUser.execute({
      user_email,
      user_cpf,
      user_name,
      cart,
      created_at,
    });

    console.log(cart)
    return response.status(201).json(User);
  }
}
