import React from "react";
import { Box, Button, Grid, Stack } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { Account } from "./account";
import AccountCard from "./AccountCard";

interface Props {
  accounts: Account[];
}

function DeleteButton() {
  return (
    <Button
      startIcon={<DeleteIcon />}
      size="small"
      variant="contained"
      color="error"
    >
      Delete
    </Button>
  );
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
    <Stack spacing={2}>
      <Box display="flex" justifyContent="flex-end">
        <DeleteButton />
      </Box>
      <Box margin={-2}>
        <Grid item container spacing={2}>
          {items}
        </Grid>
      </Box>
    </Stack>
  );
}

export default AccountGrid;
