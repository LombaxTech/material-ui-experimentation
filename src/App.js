import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  greetingStyle: {
    textDecoration: 'underline'
  }
});

const App = () => {

  const classes = useStyles();
  return (
    <div>

      <Typography
        color="secondary"
        variant="h2"
        className={classes.greetingStyle}
      >
        A link to Rainych's song
    </Typography>
      <Button
        color="secondary"
        fullWidth={true}
        href="https://www.youtube.com/watch?v=33gE0EYKesc"
        variant='contained'
      >
        Rainych Song
    </Button>
    </div>
  )
}

export default App;



// const style = {
//   height: '500px',
//   width: '260px',
//   background: 'green'
// }