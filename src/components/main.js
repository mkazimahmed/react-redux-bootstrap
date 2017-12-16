import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Dashboard from './dashboard';
import Contact from './contact';

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/contact" component={Contact} />
        </Switch>
    </main>
);

export default Main;
