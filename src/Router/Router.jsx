import React from 'react'
import { Switch, Route,Redirect} from 'react-router-dom';
import Home from '../Components/Pages/Home';
import Cart from '../Components/Pages/Cart';
const Router=()=> {
    return (
        
            <Switch>
                <Route exact path="/" component={Home} />
                <Route  path="/cart" component={Cart} />
                <Redirect to='/' />
            </Switch>
      
    ) 
} 

export default Router;
