import React from 'react';
import Item from '../item'

const ItemList = (props) => {
    return (
        <div>
            <h2>Items</h2>
            {
                props.items.map((item, k) => {
                    return <Item item={item} key={k}/>
                })
            }
        </div>
    )
};

export default ItemList;