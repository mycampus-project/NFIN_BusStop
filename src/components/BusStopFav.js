import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import StopMapFav from "./MapFav";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    margin: "auto",
    maxWidth: 500,
    backgroundColor: '#183693',
    borderRadius: "10",
    borderColor: "primary.main",
    border: 1,
    borderWidth: "4px solid",
  },
}));

export default function BusStopFav(props) {
  const classes = useStyles();

  var start = new Date()
  start.setHours(0,0,0,0)
  var current = new Date()
  var currentFromStart = (current.getTime() - start.getTime()) / 1000

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="stretch"
        >
          <Grid
            item
            xs={6}
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
          >
            <Grid item>
              <Paper>
                <Typography gutterBottom variant="h4" align="center">
                  {props.data.stop.name} 
                </Typography>
              </Paper>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="stretch"
            >
              
              <Grid
                item
                xs={6}
                container
                direction="column"
                justify="center"
                alignItems="stretch"
              >
                <Paper>
                  <Grid item xs>
                    <Typography gutterBottom variant="body1" align="left">
                      {props.data.stop.stoptimesWithoutPatterns[0].trip.routeShortName}, {props.data.stop.stoptimesWithoutPatterns[0].headsign}
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography gutterBottom variant="body1" align="left">
                      {props.data.stop.stoptimesWithoutPatterns[1].trip.routeShortName}, {props.data.stop.stoptimesWithoutPatterns[1].headsign}
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography gutterBottom variant="body1" align="left">
                      {props.data.stop.stoptimesWithoutPatterns[2].trip.routeShortName}, {props.data.stop.stoptimesWithoutPatterns[2].headsign}
                    </Typography>
                  </Grid>
                </Paper>
              </Grid>
              <Grid
                item
                xs={6}
                container
                direction="column"
                justify="center"
                alignItems="stretch"
              >
                <Paper>
                  <Grid item xs>
                    <Typography gutterBottom variant="body1" align="right">
                      {Math.floor((props.data.stop.stoptimesWithoutPatterns[0].realtimeArrival - currentFromStart) / 60)} min
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography gutterBottom variant="body1" align="right">
                      {Math.floor((props.data.stop.stoptimesWithoutPatterns[1].realtimeArrival - currentFromStart) / 60)} min
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography gutterBottom variant="body1" align="right">
                      {Math.floor((props.data.stop.stoptimesWithoutPatterns[2].realtimeArrival - currentFromStart) / 60)} min
                    </Typography>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={6}
            container
            direction="column"
            justify="center"
            alignItems="stretch"
          >
            <Grid item xs zeroMinWidth>
            <StopMapFav stop={props.data}/>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
