import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    margin: "auto",
    maxWidth: 500,
    backgroundColor: "green",
    borderRadius: "10",
    borderColor: "primary.main",
    border: 1,
    borderWidth: "4px solid",
  },
}));

export default function BusStop(props) {
  const classes = useStyles();

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
                  {props.data.node.stop.name}
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
                      {props.data.node.stop.stoptimesWithoutPatterns[0].headsign}
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography gutterBottom variant="body1" align="left">
                      {props.data.node.stop.stoptimesWithoutPatterns[1].headsign}
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography gutterBottom variant="body1" align="left">
                      {props.data.node.stop.stoptimesWithoutPatterns[2].headsign}
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
                      Aika1
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography gutterBottom variant="body1" align="right">
                      Aika2
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography gutterBottom variant="body1" align="right">
                      Aika3
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
            <Grid item>
              <Paper backgroundColor="white">
                <Typography align="center">Map Placeholder</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
