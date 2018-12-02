import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


/**
 * firstLoad
 */
window.isFirstLoad = true;
window.serverContent = '<h1>Halo 3</h1>'
if (document.getElementById("serverContent") !== null) {
  window.serverContent = document.getElementById("serverContent").innerHTML ;
}
ReactDOM.render(<App />, document.getElementById('root'));



