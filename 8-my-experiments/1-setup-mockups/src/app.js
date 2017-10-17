import React, {Component} from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import Home from './components/home/index'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div>
                        <Link to='/'>Home</Link>
                    </div>
                    <hr/>
                    <div>
                        <Switch>
                            <Route exact path='/' component={Home}>

                            </Route>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;