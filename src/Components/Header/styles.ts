import { Theme, makeStyles, createStyles } from "@material-ui/core";

const drawerWidth = 240;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(7) + 1,
      },
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    button: {
      display: "block",
      marginTop: theme.spacing(2),
    },
    formControl: {
      marginTop: "-2.75px!important",
      minWidth: "50px!important",
      height: "24px!important",
      marginLeft: "24px!important",
    },

    testCount: {
      color: "white",
      "&::before": {
        border: "none!important",
      },
    },

    formControlSelectDirection: {
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

    linkColor: {
      color: "#fff!important",
    },
  })
);
