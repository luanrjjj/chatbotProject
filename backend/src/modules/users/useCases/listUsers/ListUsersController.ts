import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUsersUseCase } from "./ListUsersUseCase";

export class ListUsersController {
  async execute(request: Request, response: Response) {
    
    const listUsers = container.resolve(ListUsersUseCase);

    const users = await listUsers.execute();


    return response.json(users);
  }
}
