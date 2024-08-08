import { CreateUserDTO } from "./create-user.dto";

export interface IUserRepository {
  createUser(data: CreateUserDTO): string;
  updateUser(data: CreateUserDTO): string;
}
