import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import BusStop from "./BusStop"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function BaseGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item >
              <BusStop/>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>juttu2</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>juttu3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
