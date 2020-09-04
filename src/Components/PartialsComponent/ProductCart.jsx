import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import ProductDetail from './ProductDetail';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {productDetailModalToggle} from '../../Redux';
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';
import {connect} from 'react-redux';
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

const  ProductCart=(props)=> {
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
                <IconButton aria-label="share" onClick={props.productDetailModalToggle}>
                  <Tooltip title="Add To Cart">
                   <AddShoppingCartRoundedIcon />
                  </Tooltip>
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <Tooltip title="Add To Wish List">
                   <FavoriteIcon />
                  </Tooltip>
                </IconButton>
        </CardActions>
        <ProductDetail/>
    </Card>
  );
}
const mapStatetoProps=state=>{
    
    return{
        productDetailModal:state.productDetailModal
    }
}

const mapDispatchtoProps=dispatch=>{
    return{
        productDetailModalToggle:function(){
                dispatch(productDetailModalToggle());
        }
    }
}
export default  connect(mapStatetoProps,mapDispatchtoProps)(ProductCart);
