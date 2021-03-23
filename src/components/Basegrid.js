import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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

export default function BaseGrid(props) {
  const classes = useStyles();
  

  for (var i = 0; i < props.data.stopsByRadius.edges.length; i++) {
    console.log(i)
  }
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
        spacing={3}>

        <Grid item >
              <BusStop data={props.data.stopsByRadius.edges[0].node}/>
        </Grid>
        <Grid item >
              <BusStop data={props.data.stopsByRadius.edges[1].node}/>
        </Grid>
        <Grid item >
              <BusStop data={props.data.stopsByRadius.edges[2].node}/>
        </Grid>
        <Grid item >
              <BusStop data={props.data.stopsByRadius.edges[3].node}/>
        </Grid>
      </Grid>
    </div>
  )
}
