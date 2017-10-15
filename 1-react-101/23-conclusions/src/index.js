import React, {Component} from 'react'; // This is called destructuring in ES6
import ReactDom from 'react-dom'; //in order to this component we need another library.-

//components
import Header from './components/header';
import News from './db.json';
import NewsList from './components/news_list.js'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            news: News,
            filtered: News
        }
    }

    filterNews(keywords) {
        let filtered = this.state.news.filter(item => {
            return item.headline.indexOf(keywords) > -1;
        });
        this.setState({filtered});
    }

    render () {
        return (
            <div>
                <h1>Hello React Developer!</h1>
                <Header newsSearch={keywords => this.filterNews(keywords)}/>
                <NewsList news={this.state.filtered}/>
            </div>
        )
    }
}

export default App;

ReactDom.render(<App/>, document.querySelector('#root'));