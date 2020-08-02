import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "../../Router";
import { MuiThemeProvider, useTheme } from "@material-ui/core/styles"; // v1.x
import { useStyles } from "./styles";
import { Header } from "../Header";

import CssBaseline from "@material-ui/core/CssBaseline";
import "typeface-roboto";

export const App = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <div className="app">
          <div className={classes.root}>
            <Header />
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <Router />
            </main>
          </div>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};
