import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const isProduction = process.env.NODE_ENV === 'production';
/**
 * What `window.isFirstLoad` ?
 * 
 * `isFirstLoad` to tell client app the first load app at client side
 * because the server already render the content of the blog at `#serverContent`
 * so we just save the content to `serverContent` variable and re render after
 * 
 */
window.isFirstLoad = isProduction; // to force frist load when Dev env

if (document.getElementById("serverContent") !== null) {
  window.serverContent = document.getElementById("serverContent").innerHTML ;
}

ReactDOM.render(<App />, document.getElementById('root'));



