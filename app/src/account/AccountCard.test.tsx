import React from "react";
import { render, screen } from "@testing-library/react";
import { Account } from "./account";
import AccountCard from "./AccountCard";

test("render account card", () => {
  const account: Account = { name: "Bank", amount: 123 };
  render(<AccountCard account={account} />);
  expect(screen.getByText(/Bank/)).toBeInTheDocument();
  expect(screen.getByText(/123/)).toBeInTheDocument();
});
