import React from "react";
import { Container, Grid } from "@mui/material";
import { AccountCard } from "./account";

function App() {
  const items = [];
  for (let i = 0; i < 8; ++i) {
    items.push(
      <Grid item xs={6} sm={4} md={3}>
        <AccountCard />
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
