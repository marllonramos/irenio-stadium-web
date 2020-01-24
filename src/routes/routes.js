import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListPlayer from '../components/ListPlayer';
import Login from '../components/Login';
import CrudPlayer from '../components/CrudPlayer';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ListPlayer} />
                <Route exact path="/loginis" component={Login} />
                <Route exact path="/crud" component={CrudPlayer} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;