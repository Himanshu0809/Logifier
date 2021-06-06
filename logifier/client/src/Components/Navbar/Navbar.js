import React from "react";
import {
  AppBar,
  Toolbar,
  Typography
} from "@material-ui/core";
import {useStyles} from './Navbar.styles.js';

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbarWrapper}>
        <Toolbar>  
          <Typography variant="h6" className={classes.title}>
            LOGIFIER
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
