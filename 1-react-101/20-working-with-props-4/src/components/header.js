import React, { Component } from 'react'

/*
The below example is a functional component. It does not care the lifecycle and its state.

const Header = () => {
    return <h2>Header</h2>
}

 */

/*
Go with functional if your component doesn't do much more than take in some props and render.
You can think of these as pure functions because they will always render and behave the same, given the same props.
Also, they don't care about lifecycle methods or have their own internal state.

Because they're lightweight, writing these simple components as functional components is pretty standard.

If your components need more functionality, like keeping state, use classes instead.
 */

/*
classes are not from React, they are from ES6 (a.k.a. ES2015).
 */

/*
In order to convert your class to a React component, your class needs to inherit(extends) React.Component
 */

class Header extends Component {

    /*

    Whenever you write a constructor inside a child class, it is required to use super() method and it must be at the
    first line.

    The main idea of React is inheritance

    Whenever we create a class for react app the class gets a default state. It is an empty state. This is only
    valid for class based components.

    Since functional components does not care for state, it is stateless.

    The Header component is class based component, hence it does care its state and whenever action happens its state
    may change.

     */

    constructor(props) {
        super(props);

        //initial state when an instance of Header is initialized
        this.state = {
            message: 'The keywords are: ',
            keywords: '',
        }
    }

    /*
    In ES5, you do render method like below:
    var header = {
        render: function(){
        }
    }
    */

    /*
    In React, JSX, you do styling like below: FIRST METHOD
    render() {
        const styles = {
            header: {
                background: '#03a9f4'
            },
            logo: {
                color: '#fff',
                fontFamily: 'Raleway',
                textAlign: 'center',
            }
        }
        return (
            <header style={styles.header}>
                <div style={styles.logo}>Logo</div>
                <input/>
            </header>
        )
    }
    */

    /*

    REGULAR METHOD for adding styles; add css definition inside index.html file under public folder.
    Now like in HTML, you can use css definitions such as classes and id in your render method.

    render() {
        return (
            <header>
                <div className="logo">Logo</div>
                <input/>
            </header>
        )
    }

    */

    /*

    FIRING EVENTS

    inputChange(event){
        console.log(event.target.value)
    }

    render() {

        return (
            <header>
                <div className="logo" onClick={()=>{console.log("High react developer!")}}>Logo</div>
                <input id="dddd" onChange={this.inputChange}/>
            </header>
        )
    }

    */

    /*
    CHANGING STATE OF AN OBJECT

    constructor(props) {
        super(props);

        //initial state when an instance of Header is initialized
        this.state = {
            message: 'The keywords are: ',
            keywords: '',
        }
    }

    inputChange(event){
        //this.state.push('') it will work, but this is bad practice. use setState method.
        this.setState({keywords:event.target.value})
    }

    render() {

        return (
            <header>
                <div className="logo" onClick={()=>{console.log("High react developer!")}}>Logo</div>
                <input id="dddd" onChange={this.inputChange.bind(this)}/>
                <div>
                    {this.state.message}
                </div>
                <div>
                    {this.state.keywords}
                </div>
            </header>
        )
    }

     */

    inputChange(event){
        //this.state.push('') it will work, but this is bad practice. use setState method.
        this.setState({keywords:event.target.value})
    }

    render() {

        return (
            <header>
                <div className="logo" onClick={()=>{console.log("High react developer!")}}>Logo</div>
                <input id="dddd" onChange={this.inputChange.bind(this)}/>
                <div>
                    {this.state.message}
                </div>
                <div>
                    {this.state.keywords}
                </div>
            </header>
        )
    }


}

export default Header;