import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from './App'

/*
Information Chain
REDUX
   ||
   V
Middleware
   ||
   V
REACT
   ||
   V
APPLICATION
 */

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware()}>
        <App/>
    </Provider>
    , document.querySelector('#root'));