import React, {Component} from 'react'
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap'

import './css/style.css'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    searchItems() {
        console.log(this.state.query);
    }

    render() {
        return (
            <div className='home'>
                Items
                <FormGroup>
                    <InputGroup>
                        <FormControl type='text' value={this.state.query}
                                     placeholder='Search for an item...'
                                     onChange={event => this.setState({query: event.target.value})}
                                     onKeyPress={event => {
                                         if(event.key === 'Enter') {
                                             this.searchItems(event)
                                         }
                                     }}
                        />
                        <InputGroup.Addon onClick={event => this.searchItems(event)}>
                            <Glyphicon glyph='search'/>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
            </div>
        )
    }
}

export default Home;