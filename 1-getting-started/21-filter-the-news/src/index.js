import React, {Component} from 'react'; // this code tells the interpreter to look for react under node_modules to import it.
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
        console.log(keywords);
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