import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ProductCart from './ProductCart';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import './Product.css';
import {productList} from '../../Redux'
import {connect} from 'react-redux';

const Product = (props) => {
    
    return (
    <React.Fragment>
        <Container>
        <button onClick={()=>props.productFun('change name')}>click</button>
        <h1>{props.product}</h1>
      
        <div className="search-bar-box">
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <SearchIcon />
                </Grid>
                <Grid item md={8}>
                    <TextField  id="input-with-icon-grid" label="Search a Products" />
                </Grid>
                <Grid item >
                   <span className="search-result">"<span className="result-fig"><SearchIcon /> <span className="result-no">445 Results</span></span>"</span>
                </Grid>
            </Grid>
        </div>
         <Grid container>
                <Grid item md={4}>
                    <ProductCart/>
                </Grid>
         </Grid>
        </Container>
    </React.Fragment>
    );
}
 
const mapStatetoProps=state=>{
    console.log(state);
    return{
        product:state.productLists
    }
}

const mapDispatchtoProps=dispatch=>{
    return{
        productFun:(data)=>{
                dispatch(productList(data));
        }
    }
}
 
export default connect(mapStatetoProps,mapDispatchtoProps)(Product);