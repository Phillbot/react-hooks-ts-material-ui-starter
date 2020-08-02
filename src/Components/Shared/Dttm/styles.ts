import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dttmPicker: {
      cursor: "pointer",
      height: "24px",
      "&:hover": {
        opacity: 0.9,
        textDecoration: "underline",
      },
    },

    icon: {
      fontSize: "1.2rem",
      margin: "1px",
    },
  })
);
