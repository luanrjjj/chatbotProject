import { inject, injectable } from "tsyringe";

import {StatementsRepository} from "../../repositories/StatementsRepository";
import {IStatementsRepository} from "../../repositories/IStatementsRepository";

import ICreateStatementDTO from "./ICreateStatementDTO";

@injectable()
export class CreateStatementUseCase {
  constructor(
    @inject("StatementsRepository")
    private statementRepository: IStatementsRepository
  ) {}

  async execute({
    user_name,
    user_email,
    user_cpf,
    cart,
    created_at,
  }: ICreateStatementDTO) {
    const statementOperation = await this.statementRepository.create({
      user_name,
      user_email,
      user_cpf,
      cart,
      created_at,
    });

    return statementOperation;
  }
}
