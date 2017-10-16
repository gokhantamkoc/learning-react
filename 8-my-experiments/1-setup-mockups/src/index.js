/*
React app entry point
 */

import React from 'react';
import ReactDOM from 'react-dom';

import App from './app'

ReactDOM.render(

    <div>
        <div className='header'>
            React-Redux API Calls
        </div>
        <div>
            <App/>
        </div>
    </div>
    ,document.querySelector('#root')
);