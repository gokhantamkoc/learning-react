import React from 'react';

/*

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

Instead of using above code, use below.
Below way, you will not use props over and over.
*/

const NewsItem = ({item}) => {
    return (
        <div className='news_item'>
            <h3>{item.headline}</h3>
            <p>
                {item.description}
            </p>
            <p>
                <i>{item.author}</i>
            </p>
        </div>
    )
}

export default NewsItem;