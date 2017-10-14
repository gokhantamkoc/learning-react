import React, {Component} from 'react';

class Lifecycle extends Component {

    /*
    Component Lifecycle
    1) Get default state
    2) Set initial state
    3) Before a component gets rendered
    4) Render jsx
    5) After a component is rendered
     */

    // 1)
    constructor(props) {
        super(props);
        // 2)
        this.state = {
            title: 'Pulp fiction in cinema.',
            body: 'some text'
        }
    }

    // 3) The function will run before component is rendered.
    componentWillMount() {
        console.log('Before component gets created.');
        //document.querySelector('h4').style.color = 'red';
        // this line will throw an error. because we are trying to access which is not created yet.
    }

    // 4)
    render() {
        return (
            <div>
                <h4>{this.state.title}</h4>
                <br/>
                <div>
                    {this.state.body}
                </div>
                <div onClick={() => this.setState({title: 'Fuck you!'})}>CLICK TO CHANGE</div>
            </div>

        )
    }

    // 5)
    componentDidMount() {
        console.log('After a component is rendered');
        document.querySelector('h4').style.color = 'red';
    }

    // 6) Before updating a component
    componentWillUpdate() {
        console.log('Before updating a component');
    }

    // 6) After updating a component
    componentDidUpdate() {
        console.log('After updating a component');
    }

    // 7) Detect state change. You can stop updating a component with returning false.
    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.title === 'something else') {
            return false;
        }
        //console.log(this.state.title);
        //console.log(nextState.title);
        return true;
    }

}

export default Lifecycle;