import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/homePage.jsx';
import styles from '../assets/styles/main.less';


class App extends Component {
  render() {
    return (
      <Router>
        <div id={styles.body} className="isLoading">
          <Route name="home" exact path="/" component={HomePage} />
        </div>
      </Router>
    )
  }
}

export default App;