import React from 'react';
import NewsItem from './news_list_item';

const newsList = (props) => {

    const news_items = props.news.map((item) => {
        return(
            <NewsItem item={item} key={item.id}/>
        )
    })

    return (
        <div>
        {news_items}
        </div>
    )
}

export default newsList;