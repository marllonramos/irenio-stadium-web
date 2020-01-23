import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListPlayer from '../components/ListPlayer';
import Login from '../components/Login';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ListPlayer} />
                <Route exact path="/loginis" component={Login} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;