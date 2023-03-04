import React from "react";
import { render, screen } from "@testing-library/react";
import { Account } from "./account";
import AccountGrid from "./AccountGrid";

describe("render account grid", () => {
  test("should render all account cards", () => {
    const accounts: Account[] = [
      { name: "Bank", amount: 123 },
      { name: "Cash", amount: 234 },
      { name: "Digital", amount: 345 },
    ];
    render(<AccountGrid accounts={accounts} />);
    for (const account of accounts) {
      expect(screen.getByText(account.name)).toBeInTheDocument();
    }
  });
  test("should render delete button", () => {
    render(<AccountGrid accounts={[]} />);
    const button = screen.getByRole("button", { name: /delete/i });
    expect(button).toBeInTheDocument();
  });
});
