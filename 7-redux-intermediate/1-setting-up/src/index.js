import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.querySelector('#root'));

/*
1) create-react-app [project_name]
2) delete files except src/index.js, public/index.html
3) refactor files in order remove errors and warnings
4) create actions, components, containers, reducers folder under src
5) run 'npm install --save redux' command.
6) run 'npm install --save react-redux' command.
7) run 'npm install --save react-router-dom' command.
8) run 'npm install -g json-server' command. (Do not run this command, if you have already installed json-server)
9) run 'json-server --watch db.json --port 3004' command.

Your project template is READY!
 */
