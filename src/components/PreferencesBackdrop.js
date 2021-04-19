import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import SettingsIcon from "@material-ui/icons/Settings";
import PreferencesMenu from "./Preferences";
import { Paper } from "@material-ui/core";
import Slide from '@material-ui/core/Slide';
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    position: "absolute",
    flex: 1,
  },
  paper: {
    height: "60%",
    width: "80%",
    justify: "flex-end",
  },
  grid: {
    height: "90%",
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
      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <Paper className={classes.paper}>
          <Grid
            className={classes.grid}
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <PreferencesMenu />
          </Grid>
        </Paper>
        </Slide>
      </Backdrop>
    </div>
  );
}
