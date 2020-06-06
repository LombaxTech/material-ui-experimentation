import React from 'react';
import { Button } from '@material-ui/core';

const style = {
  height: '500px',
  width: '260px',
  background: 'green'
}

const App = () => (

  <div>
    <Button
      color="secondary"
      fullWidth={true}
      href="https://www.youtube.com/watch?v=33gE0EYKesc"
      variant='contained'
    >
      Rainych Song
    </Button>
    <div style={style}>

    </div>
  </div>
)

export default App;
