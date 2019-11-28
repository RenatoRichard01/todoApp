import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'
import Sobre from './about/about'
//import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/sobre" component={Sobre} />
        </Switch>

        {/*<Switch>
            <Route path='*' component={Todo} />
            <Route path='/todos' component={Todo} />
            <Route path='/about' component={About} />
            </Switch>*/}
    </BrowserRouter>
    , document.getElementById('app')
);
//registerServiceWorker();