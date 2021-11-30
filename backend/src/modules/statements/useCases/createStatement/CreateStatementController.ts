import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateStatementUseCase } from "./CreateStatementUseCase";

export class CreateStatementController {
  async execute(request: Request, response: Response) {
    const { user_email, user_cpf, user_name, cart, created_at } = request.body;

    const createStatement = container.resolve(CreateStatementUseCase);

    const statement = await createStatement.execute({
      user_email,
      user_cpf,
      user_name,
      cart,
      created_at,
    });

    console.log(cart)
    return response.status(201).json(statement);
  }
}
