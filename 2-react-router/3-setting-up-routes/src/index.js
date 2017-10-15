import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';


/*
    History records the changes of url.
    BrowserRouter listens the History.
    When url change comes in History, BrowserRouter will determine which Route is registered to that change.
    the Route registers which components will be used.
*/

//components
import Posts from './components/posts';
import Profile from './components/profile';

class App extends Component {
    render() {
        return <div>Home</div>;
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));