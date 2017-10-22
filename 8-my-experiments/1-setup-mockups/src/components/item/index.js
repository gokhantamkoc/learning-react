import React, {Component} from 'react';

class Item extends Component {
    render () {
        let item = {brand: '', model: ''};
        item = this.props.item !== null ? this.props.item : item;
        return (
            <div className='item'>
                <div>
                    {item.brand}
                </div>
                <div>
                    {item.model}
                </div>
            </div>
        )
    }
}

export default Item;