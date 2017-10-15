import React, { Component } from 'react'

class Header extends Component {

    constructor(props) {
        super(props);

        //initial state when an instance of Header is initialized
        this.state = {
            message: 'The keywords are: ',
            keywords: '',
        }
        console.log(props)
    }

    inputChange(event){
        //this.state.push('') it will work, but this is bad practice. use setState method.
        this.setState({keywords:event.target.value});
        this.props.newsSearch(event.target.value)
    }

    render() {

        return (
            <header>
                <div className="logo" onClick={()=>{console.log("High react developer!")}}>Logo</div>
                <input onChange={this.inputChange.bind(this)}/>
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