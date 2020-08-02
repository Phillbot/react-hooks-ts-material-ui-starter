import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fullHeight: {
      minHeight: "100vh",
    },

    mainLoader: {
      height: "75vh",
      textAlign: "center",
    },

    mainError: {
      height: "75vh",
      textAlign: "center",
    },

    simpleLoader: {
      margin: theme.spacing(2),
      textAlign: "center",
    },

    simpleNoData: {
      margin: theme.spacing(4),
    },
  })
);
