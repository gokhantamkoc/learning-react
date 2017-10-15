import React from 'react';

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