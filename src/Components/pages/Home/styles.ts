import { Theme, makeStyles, createStyles } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    blueGridContainer: {
      background: blue[300],
      margin: theme.spacing(3, 0),
    },
    marginContainer: {
      margin: theme.spacing(3, 0),
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "26ch",
        "&:focus": {
          width: "32ch",
        },
      },
    },
  })
);
