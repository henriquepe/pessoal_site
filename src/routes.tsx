import React from 'react';
import {Switch , Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function Routes () {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About} /> 
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/contact'  component={Contact}/>
        </Switch>
    )
}

export default Routes;