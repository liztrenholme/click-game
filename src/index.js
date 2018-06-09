import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GameBody from './GameBody';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<GameBody />, document.getElementById('mainBody'));
registerServiceWorker();
