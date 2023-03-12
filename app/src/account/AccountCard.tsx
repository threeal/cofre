import React from "react";
import { Card, CardContent, Stack } from "@mui/material";
import { toLocaleCurrency } from "../utils";
import { Account } from "./account";

interface Props {
  account: Account;
}

function AccountCard({ account }: Props) {
  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          <b>{account.name}</b>
          <div>{toLocaleCurrency(account.amount)}</div>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default AccountCard;
