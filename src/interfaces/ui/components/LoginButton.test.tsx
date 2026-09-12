import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { signIn } from "next-auth/react";

import LoginButton from "./LoginButton";

vi.mock("next-auth/react", () => ({
  signIn: vi.fn(),
}));

describe("LoginButton", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("signs in with Cognito when clicked", () => {
    render(<LoginButton />);

    fireEvent.click(screen.getByRole("button", { name: "Login" }));

    expect(signIn).toHaveBeenCalledWith("cognito", {
      callbackUrl: "/",
    });
  });
});