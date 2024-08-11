import { CreateUserDTO } from "./create-user.dto";
import { IUserRepository } from "./user-repo.interface";

export class UserRepository implements IUserRepository {
  user: any[] = [];
  createUser(data: CreateUserDTO) {
    if (this.user.find((e) => e["userName"] == data.userName))
      throw new Error("user already exist");
    this.user.push(data);
    return "Real code to store in DB";
  }
  updateUser(data: CreateUserDTO) {
    return "Real code to store in DB";
  }
}
