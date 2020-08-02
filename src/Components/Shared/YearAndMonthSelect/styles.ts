import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      width: "100%",
    },
    select: {
      color: "#f5f5f5",
      "&:before": {
        borderColor: "#f5f5f5!important",
      },
      "&:after": {
        borderColor: "#f5f5f5!important",
      },
    },
    icon: {
      fill: "#f5f5f5",
    },
  })
);
