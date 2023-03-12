import React from "react";
import { Close as CloseIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Dialog,
  IconButton,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Account } from "./account";

interface Props {
  account: Account;
  open: boolean;
  onClose?: () => void;
}

function AccountDialog({ account, open, onClose }: Props) {
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={downSm}
      fullWidth
      maxWidth="sm"
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton onClick={onClose} color="inherit">
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2 }} variant="h6" component="div">
            Account Property
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{ display: "flex", flexDirection: "column", m: 3, mt: 4, gap: 4 }}
      >
        <TextField
          label="Name"
          value={account.name}
          inputProps={{ readOnly: true }}
          fullWidth
        />
        <TextField
          label="Amount"
          value={account.amount}
          inputProps={{ readOnly: true }}
          fullWidth
        />
      </Box>
    </Dialog>
  );
}

export default AccountDialog;
