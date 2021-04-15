import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import BusStopFav from "./BusStopFav"
import { Paper } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: "white",
  },
}));

export default function BaseGridFav(props) {
  const classes = useStyles();

  console.log("Miokka", props.data.stop)

  return (
    <div className={classes.root}>
      <Paper>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
        spacing={1}
        margin={1}>
   
        {/*props.data.map((data, index) => {
          return (
          <Grid item key = { index }>
            <Paper elevation={3}>
            <BusStopFav data={props.data}/>
            </Paper>
          </Grid>
          )})*/}

          <Grid item >
            <Paper elevation={3}>
            <BusStopFav data={props.data}/>
            </Paper>
          </Grid>

      </Grid>
      </Paper>
    </div>
  )
}
