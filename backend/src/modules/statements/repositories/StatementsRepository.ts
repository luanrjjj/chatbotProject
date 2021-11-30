import { getMongoRepository, getRepository, MongoRepository, Repository } from "typeorm";

import Statements from "../typeorm/schemas/Statements";

import ICreateStatementRepositoryDTO from "../useCases/createStatement/ICreateStatementDTO";

import {IStatementsRepository} from "./IStatementsRepository";

export class StatementsRepository implements IStatementsRepository {
  private ormRepository: MongoRepository<Statements>;

  constructor() {
    this.ormRepository = getMongoRepository(Statements,'mongo');
  }

  public async create({
    user_name,
    user_email,
    user_cpf,
    cart,
    created_at,
  }: ICreateStatementRepositoryDTO): Promise<Statements> {
    const statement = this.ormRepository?.create({
      user_name,
      user_email,
      user_cpf,
      cart,
      created_at,
    });

    console.log(statement)
    console.log('here')
    await this.ormRepository.save(statement);

    console.log('here1')
    return statement;
  }
}
