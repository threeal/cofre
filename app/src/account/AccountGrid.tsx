import React from "react";
import { Grid } from "@mui/material";
import { Account } from "./account";
import AccountCard from "./AccountCard";

interface Props {
  accounts: Account[];
}

function AccountGrid({ accounts }: Props) {
  const items = [];
  for (const [i, account] of accounts.entries()) {
    items.push(
      <Grid key={i} item xs={6} sm={4} md={3}>
        <AccountCard account={account} />
      </Grid>
    );
  }
  return (
    <Grid container spacing={2}>
      {items}
    </Grid>
  );
}

export default AccountGrid;
