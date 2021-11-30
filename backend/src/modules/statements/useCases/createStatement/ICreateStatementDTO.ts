export default interface ICreateStatementDTO {
  user_name: string;
  user_email: string;
  user_cpf: string;
  cart: Object[];
  created_at: Date;
}
