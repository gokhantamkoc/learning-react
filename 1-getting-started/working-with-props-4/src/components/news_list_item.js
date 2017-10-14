import React from 'react';

const NewsItem = (props) => {
    return (
        <div key={props.item.id}>
            <h3>{props.item.headline}</h3>
            <p>
                {props.item.description}
            </p>
            <p>
                <i>{props.item.author}</i>
            </p>
        </div>
    )
}

export default NewsItem;