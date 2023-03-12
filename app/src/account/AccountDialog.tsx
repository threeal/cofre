import React from "react";
import { Close as CloseIcon } from "@mui/icons-material";
import {
  AppBar,
  Dialog,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface Props {
  open: boolean;
  onClose?: () => void;
}

function AccountDialog({ open, onClose }: Props) {
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
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Account Property
          </Typography>
        </Toolbar>
      </AppBar>
    </Dialog>
  );
}

export default AccountDialog;
