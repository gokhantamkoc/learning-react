import React, {Component} from 'react';
import { connect } from 'react-redux';

import { userLoginRequest } from './actions/userActions'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isAuthenticating: false
        }
    }

    userLoginRequest() {
        console.log('App this: ', this);
        this.props.userLoginRequest(this.state.email, this.state.password);
    }

    render() {
        return (
            <div className='app container'>
                <h1>Comodo Intelligence Portal</h1>
                <div className='form-horizontal'>
                    <div className='form-group'>
                        Email Address:
                        <input
                            className='form-control'
                            placeholder='Please enter your email address'
                            onChange={event => this.setState({email: event.target.value})}
                        />

                        Password:
                        <input
                            type='password'
                            className='form-control'
                            placeholder='Please enter your email address'
                            onChange={event => this.setState({password: event.target.value})}
                        />

                        <button type='button' className='btn btn-success' onClick={() => this.userLoginRequest()}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

// mapping Application state to PROPS

function mapStateToProps(state) {
    console.log('state: ', state);
    return {
        feeds: state
    }
}

export default connect(mapStateToProps, {userLoginRequest})(App);

/*

instead of below code
  | |
  | |
 \   /
 \  /
  V

 ---> Mapping Actions To Props
function mapDispatchToProps(dispatch) {
    return bindActionCreators({userLoginRequest}, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
*/