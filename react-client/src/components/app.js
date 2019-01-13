import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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