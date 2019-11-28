import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'

import Todo from '../todo/todo'
import About from '../about/about'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='*' component={Todo} />
            <Route path='/todos' component={Todo} />
            <Route path='/about' component={About} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('app')
);
