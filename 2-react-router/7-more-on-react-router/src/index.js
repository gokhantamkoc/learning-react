import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter, Route, Link, Switch, NavLink} from 'react-router-dom';

//components

import Posts from './components/posts';
import Profile from './components/profile';
import PostsItem from './components/posts_item';
import NotFound from "./components/404";

class App extends Component {
    render() {
        return <div>Home</div>;
    }
}

ReactDOM.render(
    <MemoryRouter>
        <div>
            <div>
                <p><NavLink to="/" activeClassName="selected">Home</NavLink></p>
                <p><NavLink to="/posts" activeClassName="selected">Posts</NavLink></p>
                <p><NavLink to="/profile" activeClassName="selected">Profile</NavLink></p>
            </div>
            <hr/>
            <Switch>
                <Route path="/posts/:id" component={PostsItem}></Route>
                <Route path="/profile" component={Profile}></Route>
                <Route path="/posts" component={Posts}></Route>
                <Route exact path="/" component={App}></Route>
                <Route path="*" component={NotFound}></Route>
            </Switch>
        </div>
    </MemoryRouter>
    , document.querySelector('#root'));

/*
When using switch, order your routes from specific to general route.
And now you can remove the exact keyword. :)

In order to increase a security, we can use HashRouter instead of BrowserRouter

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';

//components

import Posts from './components/posts';
import Profile from './components/profile';
import PostsItem from './components/posts_item';
import NotFound from "./components/404";

class App extends Component {
    render() {
        return <div>Home</div>;
    }
}

ReactDOM.render(
    <HashRouter>
        <div>
            <div>
                <p><Link to="/">Home</Link></p>
                <p><Link to="/posts">Posts</Link></p>
                <p><Link to="/profile">Profile</Link></p>
            </div>
            <hr/>
            <Switch>
                <Route path="/posts/:id" component={PostsItem}></Route>
                <Route path="/profile" component={Profile}></Route>
                <Route path="/posts" component={Posts}></Route>
                <Route exact path="/" component={App}></Route>
                <Route path="*" component={NotFound}></Route>
            </Switch>
        </div>
    </HashRouter>
    , document.querySelector('#root'));
 */