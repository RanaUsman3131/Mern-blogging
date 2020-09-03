import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      marginTop:20 ,
      marginBottom:10
        },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

const  ProductCart=()=> {
  const classes = useStyles();
 
  return (
    <Card className={classes.root}>
        <CardHeader title="Shrimp and Chorizo Paella"  subheader="September 14, 2016"/>
        <CardMedia className={classes.media} image={"https://via.placeholder.com/300/09f.png/fff"} title="Paella dish"/>
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                <ShareIcon />
                </IconButton>
        </CardActions>
    </Card>
  );
}

export default ProductCart;
