import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import BusStop from "./BusStop"
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

export default function BaseGrid(props) {
  const classes = useStyles();
 
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

        {props.data.stopsByRadius.edges.map((data) => {
          return (
          <Grid item >
            <Paper elevation={3}>
            <BusStop data={data}/>
            </Paper>
          </Grid>
          )})}
        
      </Grid>
      </Paper>
    </div>
  )
}
