import React from 'react';
import CoffeeCard from './CoffeeCard';
import { Grid } from '@material-ui/core';

const Content = () => {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
                <CoffeeCard
                    title={"Hamilton Beach Coffee"}
                    subheader={"£89.99"}
                    avatarSrc={"data:image/jpeg;base64,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"}
                    imgSrc={"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSA1lm55EygSRI-W8WufY8g-kofTLNnbK8_8VbXCY2zaeWYxcjXlRGJfmNTFXYfRF7BxKnn7B2kBw&usqp=CAc"}
                    description={"Just a coffee maker"}
                />
            </Grid>
            {/* <Grid item xs={12} sm={6} md={4}>
                <CoffeeCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <CoffeeCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <CoffeeCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <CoffeeCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <CoffeeCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <CoffeeCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <CoffeeCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <CoffeeCard />
            </Grid> */}
        </Grid>
    )
}

export default Content;