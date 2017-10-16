import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch, NavLink} from 'react-router-dom';

//components

import Posts from './components/posts';
import Profile from './components/profile';
import PostsItem from './components/posts_item';
import NotFound from "./components/404";
import Lifecycle from "./components/lifecycle";

class App extends Component {
    render() {
        return <div>Home</div>;
    }
}

ReactDOM.render(
    <HashRouter>
        <div>
            <div>
                <p><NavLink to="/" activeClassName="selected">Home</NavLink></p>
                <p><NavLink to="/posts" activeClassName="selected">Posts</NavLink></p>
                <p><NavLink to="/profile" activeClassName="selected">Profile</NavLink></p>
                <p><NavLink to="/lifecycle" activeClassName="selected">Lifecycle</NavLink></p>
            </div>
            <hr/>
            <Switch>
                <Route path="/posts/:id" component={PostsItem}></Route>
                <Route path="/profile" component={Profile}></Route>
                <Route path="/posts" component={Posts}></Route>
                <Route path="/lifecycle" component={Lifecycle}></Route>
                <Route exact path="/" component={App}></Route>
                <Route path="*" component={NotFound}></Route>
            </Switch>
        </div>
    </HashRouter>
    , document.querySelector('#root'));