import React from "react";
import { Card, CardActionArea, CardContent, Stack } from "@mui/material";
import { toLocaleCurrency } from "../utils";
import { Account } from "./account";

interface Props {
  account: Account;
  onClick?: () => void;
}

function AccountCard({ account, onClick }: Props) {
  return (
    <Card>
      <CardActionArea onClick={onClick}>
        <CardContent>
          <Stack spacing={2}>
            <b>{account.name}</b>
            <div>{toLocaleCurrency(account.amount)}</div>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default AccountCard;
