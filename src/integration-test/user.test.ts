import { User } from "./user";
import { CreateUserDTO } from "./create-user.dto";
import { IUserRepository } from "./user-repo.interface";

describe("User", () => {
  let user: User;
  let userRepository: IUserRepository;
  beforeAll(() => {
    userRepository = {
      createUser: jest
        .fn()
        .mockImplementationOnce((data: CreateUserDTO) => {
          return "Dummy code to store in DB";
        })
        .mockImplementationOnce((data: CreateUserDTO) => {
          throw new Error("User name already taken");
        }),
      updateUser: jest.fn().mockImplementation((data: CreateUserDTO) => {
        return "Dummy code to store in DB";
      }),
    };
    user = new User(userRepository);
  });
  it("Should throw Age eligibility error", () => {
    expect(
      user.createUser({
        dob: "2015-01-01",
        password: "openpassword",
        userName: "Raj",
      })
    ).rejects.toThrow("You are not eligible to access this section");
  });

  it("Should throw password security issue", () => {
    expect(
      user.createUser({
        dob: "2000-01-01",
        password: "openpassword",
        userName: "Raj",
      })
    ).rejects.toThrow(
      "Passwrord doesnt met the criteria. Min 8 char, 1 number, 1 Symbol"
    );
  });

  it("Should create user", () => {
    expect(
      user.createUser({
        dob: "2000-01-01",
        password: "test@123",
        userName: "Raj",
      })
    ).resolves.toBe("Dummy code to store in DB");
    expect(userRepository).toBeDefined();
    expect(userRepository.createUser).toHaveBeenCalled();
    expect(userRepository.createUser).toHaveReturnedWith(
      "Dummy code to store in DB"
    );
  });
  it("Should throw error in case of user already exist", () => {
    expect(
      user.createUser({
        dob: "2000-01-01",
        password: "test@123",
        userName: "Raj",
      })
    ).rejects.toThrow("User name already taken");
  });
});
