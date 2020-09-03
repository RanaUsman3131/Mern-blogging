import React from 'react'
import { Switch, Route,Redirect} from 'react-router-dom';
import Home from '../Pages/Home';
const Router=()=> {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Redirect to='/' />
            </Switch>
        </div>
    )
}

export default Router;
