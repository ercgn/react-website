import React, { Component } from 'react';
import BackgroundContainer from '../background/BackgroundContainer';

class HomePage extends Component {
  render() {
    return (
      <div>
        <BackgroundContainer/>
          <p>this is a test</p>
      </div>
    )
  }
}

export default HomePage;