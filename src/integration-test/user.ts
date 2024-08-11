import { CreateUserDTO } from "./create-user.dto";
import { IUserRepository } from "./user-repo.interface";

export class User {
  constructor(private userRepository: IUserRepository) {}
  async createUser(userData: CreateUserDTO) {
    const allowedAge = 18;
    const passwordRule = /^(?=.*[0-9])(?=.*[\W_]).{8,}$/;
    let userAge =
      (Date.now() - new Date(userData.dob).getTime()) /
      (1000 * 60 * 60 * 24 * 365);
    if (Math.floor(userAge) < allowedAge)
      throw new Error("You are not eligible to access this section");
    if (!passwordRule.test(userData.password))
      throw new Error(
        "Passwrord doesnt met the criteria. Min 8 char, 1 number, 1 Symbol"
      );
    let data = await this.userRepository.createUser(userData);
    return data;
  }
}
