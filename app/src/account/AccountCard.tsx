import React from "react";
import { Card, CardContent, Stack } from "@mui/material";

function AccountCard() {
  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          <b>Bank</b>
          <div>Rp. 19.000.000</div>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default AccountCard;
