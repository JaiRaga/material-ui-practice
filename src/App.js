import React from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";

const useStyles = makeStyles({
  textStyle: {
    fontStyle: "Oblique"
  },
  buttonColor: {
    color: "red"
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className='App'>
      <Typography className={classes.textStyle} color='secondary' variant='h1'>
        Hello There
      </Typography>
      <Button className={} color='primary' variant='outlined'>
        This is a Button
      </Button>
    </div>
  );
}

export default App;
