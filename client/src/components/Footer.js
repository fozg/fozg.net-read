import React from 'react';
import styles from './Footer.module.scss';

export default class Footer extends React.Component {
  render () {
    return (
      <div className={styles.Footer}>
        <div className="container">
          fozg.net ✌ {new Date().getFullYear()}
          <br/>
            This blog was bootstrapped 
            {' '}with <a href="https://github.com/facebook/create-react-app">Create React App</a>
            {' '} & <a href="https://expressjs.com/">ExpressJS</a>
            <br/>
            Developed by <a href="https://github.com/fozg">Fozg</a>.
            Source code at <a href="https://github.com/fozg/fozg.net-read">Github</a>
        </div>
      </div>
    )
  } 
}