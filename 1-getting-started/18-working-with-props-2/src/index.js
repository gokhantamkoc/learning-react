import React, {Component} from 'react'; // this code tells the interpreter to look for react under node_modules to import it.
import ReactDom from 'react-dom'; //in order to this component we need another library.-

//components
import Header from './components/header';

/*
App is the entry point for a React App.
Whenever the app is loaded or refreshed at a Web browser, App is firstly initialized.
Hence, implementing App as a functional or class based component is the first priority of a React Developer.
 */

/*
WORKING WITH PROPS
 */
import News from './db.json';
import NewsList from './components/news_list.js'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            news: News,
        }
    }

    render () {
        return (
            <div>
                <h1>Hello React Developer!</h1>
                <Header/>
                <NewsList news={this.state.news}/>
            </div>
        )
    }
}

export default App;

/*
    return statement can only be a single-line. In order to use multi-line
    return use parenthesis and a single HTML element
    return (

        <div>
        Yeahhhhh! <h1>This is a multi-line return</h1>
        </div>
    )

     */

/*
    Funtional component
    const App = () => {
        return (
            <div>
                <h1>Hello React Developer!</h1>
                <Header/>
            </div>
        )
    }

 */

ReactDom.render(<App/>, document.querySelector('#root'));