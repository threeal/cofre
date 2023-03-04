import React from "react";
import { Card, CardContent, Stack } from "@mui/material";
import { toLocaleCurrency } from "../utils";

interface AccountCardProps {
  name: string;
  value: number;
}

function AccountCard(props: AccountCardProps) {
  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          <b>{props.name}</b>
          <div>{toLocaleCurrency(props.value)}</div>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default AccountCard;
