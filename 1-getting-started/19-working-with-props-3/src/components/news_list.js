/*
Whenever you create a component, a React Developer needs to answer "Which type of component should I use?".
Stateless or Stateful
Functional or Class Based

Creating a 'class based component and not using its state' is a bad implementation.

So we will only news in newsList component, its state will never change in our current implementation.
Functional component is the type we will select.
Class based component is heavier than functional components. Hence, class based components are consuming more memory
than functional components.

 */

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