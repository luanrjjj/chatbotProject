import ICreateStatementRepositoryDTO from "../useCases/createStatement/ICreateStatementDTO";
import Statement from "../typeorm/schemas/Statements";

export  interface IStatementsRepository {
  create(data: ICreateStatementRepositoryDTO): Promise<Statement>;
}
