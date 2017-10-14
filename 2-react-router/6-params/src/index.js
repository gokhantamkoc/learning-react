import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';


/*
    We have now set the routes.
    This way is not user-friendly.
    Users do not desire to change the URL.
    Let's setup links
*/

//components

import Posts from './components/posts';
import Profile from './components/profile';
import PostsItem from './components/posts_item';

class App extends Component {
    render() {
        return <div>Home</div>;
    }
}

ReactDOM.render(
    <BrowserRouter>
        <div>
            <div>
                <p><Link to="/">Home</Link></p>
                <p><Link to="/posts">Posts</Link></p>
                <p><Link to="/profile">Profile</Link></p>
            </div>
            <hr/>
            <Route exact path="/" component={App}></Route>
            <Route exact path="/posts" component={Posts}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/posts/:id" component={PostsItem}></Route>
        </div>
    </BrowserRouter>
    , document.querySelector('#root'));

/*
<Route path="/posts/:id" component={PostsItem}></Route>

This is how we can catch url with params in a route.
 */