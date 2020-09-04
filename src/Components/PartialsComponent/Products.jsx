import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ProductCart from './ProductCart';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import './Product.css';


const Product = (props) => {
    
    return (
    <React.Fragment>
        <Container>
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
 

 
export default Product;