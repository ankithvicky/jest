import { CreateUserDTO } from "./create-user.dto";
import { IUserRepository } from "./user-repo.interface";

export class UserRepository implements IUserRepository {
  createUser(data: CreateUserDTO) {
    return "Real code to store in DB";
  }
  updateUser(data: CreateUserDTO) {
    return "Real code to store in DB";
  }
}
