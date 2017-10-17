import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';

import App from './components/app';
import Car from './components/car';
//style
import './app.css'



ReactDOM.render(
    <HashRouter>
        <div>
            <Route exact path="/" component={App}/>
            <Route path = "/car/:id" component={Car}/>
        </div>
    </HashRouter>
    , document.querySelector('#root'));