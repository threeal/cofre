import React from "react";
import { Container } from "@mui/material";
import { Account, AccountGrid } from "./account";

function App() {
  const accounts: Account[] = [
    { name: "Investment", amount: 55000000 },
    { name: "Bank", amount: 3500000 },
    { name: "Cash", amount: 220000 },
    { name: "Digital", amount: 50000 },
  ];
  return (
    <div>
      <Container maxWidth="md">
        <AccountGrid accounts={accounts} />
      </Container>
    </div>
  );
}

export default App;
