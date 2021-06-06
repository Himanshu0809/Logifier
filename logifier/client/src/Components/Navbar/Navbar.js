import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    fontWeight:700,
    fontSize:30,
    marginLeft:30,
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
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
