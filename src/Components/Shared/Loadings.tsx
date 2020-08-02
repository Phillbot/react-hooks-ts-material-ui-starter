import React from "react";
import { useStyles } from "./styles";
import { Grid, CircularProgress } from "@material-ui/core";

import Skeleton from "@material-ui/lab/Skeleton";

export const MainCenteredLoader = () => {
  const classes = useStyles();

  return (
    <Grid container alignContent="center" className={classes.mainLoader}>
      <Grid item xs={12}>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};

export const SimpleCenteredLoader = () => {
  const classes = useStyles();

  return (
    <Grid container alignContent="center" className={classes.simpleLoader}>
      <Grid item xs={12}>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};

export const TextLoaderSkeleton1 = () => {
  return <Skeleton variant="rect" height={60} style={{ margin: "15px 0" }} />;
};

export const TextLoaderSkeleton2 = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignContent="center"
      alignItems="center"
      className={classes.fullHeight}
    >
      <Grid item lg={6} xs={12}>
        <Skeleton
          variant="rect"
          height={400}
          width={"80%"}
          style={{ margin: "20px auto", textAlign: "center" }}
        />
      </Grid>

      <Grid item lg={6} xs={12}>
        <Skeleton
          variant="rect"
          height={400}
          width={"80%"}
          style={{ margin: "20px auto", textAlign: "center" }}
        />
      </Grid>
    </Grid>
  );
};
