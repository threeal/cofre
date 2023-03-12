import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Account } from "./account";
import AccountCard from "./AccountCard";
import AccountDialog from "./AccountDialog";

interface Props {
  accounts: Account[];
}

function AccountGrid({ accounts }: Props) {
  const [open, setOpen] = useState(false);
  const [account, setAccount] = useState({ name: "", amount: 0 });
  const items = [];
  for (const [i, account] of accounts.entries()) {
    const onClick = () => {
      setAccount(account);
      setOpen(true);
    };
    items.push(
      <Grid key={i} item xs={6} sm={4} md={3}>
        <AccountCard account={account} onClick={onClick} />
      </Grid>
    );
  }
  return (
    <div>
      <Grid container spacing={2}>
        {items}
      </Grid>
      <AccountDialog
        account={account}
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}

export default AccountGrid;
