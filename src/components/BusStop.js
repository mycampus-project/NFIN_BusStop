import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import StopMap from "./Map";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    margin: "auto",
    backgroundColor: "#183693",
  },
}));

export default function BusStop(props) {
  const classes = useStyles();

  // Making the time match the format of the HSL api
  // Shownig time in format og minutes to arrival 
  var start = new Date();
  start.setHours(0, 0, 0, 0);
  var current = new Date();
  var currentFromStart = (current.getTime() - start.getTime()) / 1000;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="stretch"
        >
          <Grid
            item
            xs
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
          >
            <Paper elevation={3}>
              <Grid item>
                <Typography variant="h4" align="flex-start">
                  {props.data.node.stop.name}
                </Typography>
              </Grid>
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="stretch"
              >
                <Box display="flex" flexGrow={1}>
                  <Grid
                    item
                    xs={6}
                    container
                    direction="column"
                    justify="center"
                    alignItems="stretch"
                  >
                    <Grid item xs>
                      <Typography variant="body1" align="left">
                        {
                          props.data.node.stop.stoptimesWithoutPatterns[0].trip
                            .routeShortName
                        }
                        ,{" "}
                        {
                          props.data.node.stop.stoptimesWithoutPatterns[0]
                            .headsign
                        }
                      </Typography>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                      <Typography variant="body1" align="left">
                        {
                          props.data.node.stop.stoptimesWithoutPatterns[1].trip
                            .routeShortName
                        }
                        ,{" "}
                        {
                          props.data.node.stop.stoptimesWithoutPatterns[1]
                            .headsign
                        }
                      </Typography>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                      <Typography variant="body1" align="left">
                        {
                          props.data.node.stop.stoptimesWithoutPatterns[2].trip
                            .routeShortName
                        }
                        ,{" "}
                        {
                          props.data.node.stop.stoptimesWithoutPatterns[2]
                            .headsign
                        }
                      </Typography>
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
                      <Typography variant="body1" align="right">
                        {Math.floor(
                          (props.data.node.stop.stoptimesWithoutPatterns[0]
                            .realtimeArrival -
                            currentFromStart) /
                            60
                        )}{" "}
                        min
                      </Typography>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                      <Typography variant="body1" align="right">
                        {Math.floor(
                          (props.data.node.stop.stoptimesWithoutPatterns[1]
                            .realtimeArrival -
                            currentFromStart) /
                            60
                        )}{" "}
                        min
                      </Typography>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                      <Typography variant="body1" align="right">
                        {Math.floor(
                          (props.data.node.stop.stoptimesWithoutPatterns[2]
                            .realtimeArrival -
                            currentFromStart) /
                            60
                        )}{" "}
                        min
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
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
          <Grid item xs zeroMinWidth>
            <StopMap stop={props.data.node}/>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
