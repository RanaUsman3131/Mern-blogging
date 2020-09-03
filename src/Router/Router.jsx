import React from 'react'
import { Switch, Route,Redirect} from 'react-router-dom';
import Home from '../Components/Pages/Home';
import Cart from '../Components/Pages/Cart';
const Router=()=> {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Cart" component={Cart} />
                <Redirect to='/' />
            </Switch>
        </div>
    )
}

export default Router;
