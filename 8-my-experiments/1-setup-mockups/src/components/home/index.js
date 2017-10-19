import React, {Component} from 'react'
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap'

import './css/style.css'

import ItemList from '../item_list'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            items: [],
            filteredItems: []
        }
        this.loadItems();
    }

    loadItems() {
        const BASE_URL = "http://localhost:9000";
        const FETCH_URL = `${BASE_URL}/items`;
        fetch(FETCH_URL, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => {
                this.setState({items: json, filteredItems: json});
            });
    }

    searchItems(event) {
        this.setState({filteredItems: this.state.items.filter(
            item => {
                return (
                    item.category.indexOf(event.target.value) > -1 ||
                    item.brand.indexOf(event.target.value) > -1
                );
            }
        )});
    }

    render() {
        return (
            <div className='home'>
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
                <ItemList items={this.state.filteredItems}/>
            </div>
        )
    }
}

export default Home;