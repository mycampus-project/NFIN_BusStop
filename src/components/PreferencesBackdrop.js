import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import SettingsIcon from "@material-ui/icons/Settings";
import PreferencesMenu from "./Preferences";
import { Paper } from "@material-ui/core";
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function PreferecesBackdropButton() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <IconButton variant="outlined" color="white" onClick={handleToggle}>
        <SettingsIcon />
      </IconButton>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <Paper>
        <PreferencesMenu/>
        </Paper>
      </Backdrop>
    </div>
  );
}
