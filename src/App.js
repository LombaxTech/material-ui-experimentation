import React from 'react';
import { Grid } from '@material-ui/core'

const App = () => {

    return (
        <div>
            <Grid container direction="column" >
                <Grid item> Header</Grid>
                <Grid item container>
                    <Grid item xs={0} sm={2} />
                    <Grid item xs={12} sm={8} >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nemo maxime eius tenetur laborum blanditiis aspernatur, sequi sed neque doloribus totam! Rerum, sint modi. Illum eum magnam, nisi magni ullam ea reprehenderit, debitis tenetur ipsa corporis suscipit dolorem laudantium assumenda autem. Velit, suscipit perspiciatis. Distinctio facilis quis dicta at ducimus nisi soluta tenetur voluptatibus qui, iusto illum maiores veniam, porro quibusdam quos accusantium delectus fugit maxime! Velit, quaerat placeat! Autem.
                    </Grid>
                    <Grid item xs={0} sm={2} />
                </Grid>
            </Grid>
        </div>
    )
}

export default App