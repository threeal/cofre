import React from "react";
import { Container, Grid } from "@mui/material";
import { Account, AccountCard } from "./account";

function App() {
  const items = [];
  for (let i = 0; i < 8; ++i) {
    const account: Account = { name: "Bank", amount: 3500000 };
    items.push(
      <Grid item xs={6} sm={4} md={3}>
        <AccountCard account={account} />
      </Grid>
    );
  }
  return (
    <div>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          {items}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
