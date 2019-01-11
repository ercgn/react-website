import React, { Component } from 'react';
import Whistler from '../../assets/whistler.jpg';

class BackgroundContainer extends Component {
  render() {
    return (
      <div className="backgroundContainer" id="backgroundImage">
        <img src={Whistler} />
      </div>
    )
  }
}

export default BackgroundContainer;