import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GameBody from './Components/GameBody';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<GameBody />, document.getElementById('mainBody'));
registerServiceWorker();
//need to pass GameBody into app somehow and get rid of it rendering through here!!