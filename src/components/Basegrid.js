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
 
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
        spacing={3}>

        {props.data.stopsByRadius.edges.map((data) => {
          return (
          <Grid item >
            <BusStop data={data}/>
          </Grid>
          )})}
        
      </Grid>
    </div>
  )
}
