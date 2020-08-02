import React from "react";
import clsx from "clsx";
import {
  Typography,
  Drawer,
  AppBar,
  Toolbar,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "./styles";
import { navLinks } from "./links";
import { Link, NavLink } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

export const Header = () => {
  const classes = useStyles();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            className={classes.linkColor}
          >
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {navLinks.map((item: any) => {
            const { id, url, name, icon } = item;

            return (
              <ListItem
                button
                key={id}
                component={NavLink}
                to={url}
                activeClassName="Mui-selected"
                exact
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            );
          })}
        </List>
        <Divider />
      </Drawer>
    </>
  );
};
