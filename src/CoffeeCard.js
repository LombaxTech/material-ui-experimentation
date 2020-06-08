import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareIcon from '@material-ui/icons/Share';

import CardMedia from '@material-ui/core/CardMedia';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const CoffeeCard = (props) => {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const { avatarSrc, title, subheader, description, imgSrc } = props;

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar src={avatarSrc} />
                }
                action={
                    <IconButton aria-label="settings">
                        <ShareIcon />
                    </IconButton>
                }
                title={title}
                subheader={subheader}
            />
            <CardMedia
                style={{ height: '150px' }}
                image={imgSrc}
            />
            <CardContent>
                <Typography>
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary">
                    Buy Now
                </Button>
                <Button variant="outline" color="secondary">
                    Offer
                </Button>
            </CardActions>
        </Card >
    )
}

export default CoffeeCard;