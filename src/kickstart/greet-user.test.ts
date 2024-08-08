import { describe, expect } from "@jest/globals";
import { greetuser } from "./greet-user";

describe("GreetUser", () => {
  it("Should print some values", () => {
    expect(greetuser("Vicky")).toBe("Hello Vicky");
    expect(greetuser()).toBe("Hello undefined");
  });
});
