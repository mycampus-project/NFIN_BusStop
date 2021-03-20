import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Box from "@material-ui/core/Box";
import Query from "./components/Query";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
    backgroundColor: "green",
    borderRadius: "10",
    borderColor: "primary.main",
    border: 1,
    borderWidth: "4px solid",
  },
}));

export default function BusStop() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={1}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="stretch"
            spacing={3}>
            <Grid item xs={6} container direction="column" spacing={2}>
              <Grid item xs>
                <Paper>
                <Typography gutterBottom variant="h4" align="left">
                  Pysäkki
                </Typography>
                </Paper>
                <Grid item xs
                  container spacing={3}
                  direction="row"
                  justify="space-evenly"
                  alignItems="stretch" >
                    <Paper>
                  <Grid>
                    <Typography gutterBottom variant="body1" align="left">
                      Linja1
                    </Typography>
                    <Typography gutterBottom variant="body1" align="left">
                      Linja2
                    </Typography>
                    <Typography gutterBottom variant="body1" align="left">
                      Linja3
                    </Typography>
                  </Grid>
                  </Paper>
                  <Paper>
                  <Grid>
                    <Typography gutterBottom variant="body1" align="left">
                      Aika1
                    </Typography>
                    <Typography gutterBottom variant="body1" align="left">
                      Aika2
                    </Typography>
                    <Typography gutterBottom variant="body1" align="left">
                      Aika3
                    </Typography>
                  </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} direction="column"  justify="center">
              <Paper backgroundColor="white">
                <Typography>TEST</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
