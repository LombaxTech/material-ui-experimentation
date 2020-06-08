import React from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1
    }
}))

const Header = () => {

    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typographyStyles}>
                    Header
                </Typography>
                <AccountCircleIcon />
            </Toolbar>
        </AppBar>
    )
}

// const Header = () => {

//     return (
//         <AppBar position="static">
//             <Toolbar>
//                 <Grid container>
//                     <Grid item xs={10}>
//                         <Typography>Header Section</Typography>
//                     </Grid>
//                     <Grid item xs={2}>
//                         <AccountCircleIcon />
//                     </Grid>
//                 </Grid>

//             </Toolbar>
//         </AppBar>
//     )
// }

export default Header;