import React from "react";
import { render, screen } from "@testing-library/react";
import AccountCard from "./AccountCard";

test("render account card", () => {
  render(<AccountCard name="Bank" value={123} />);
  expect(screen.getByText(/Bank/)).toBeInTheDocument();
  expect(screen.getByText(/123/)).toBeInTheDocument();
});
