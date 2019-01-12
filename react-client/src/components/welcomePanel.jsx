import React, { Component } from 'react';
import styles from '../assets/styles/styles.less';

class WelcomePanel extends Component {
  render() {
    return (
      <div className={styles.welcome}>
        <header>
          <p id={styles.portfolio}>Eric Gan</p>
          <p>I am passionate about developing software for the social good.
            Whether it is developing mobile apps for humanitarian efforts or
            designing a more intuitive UX/UI for a non-profit company, I find
            technology a gateway to unifying the international world.</p>

          <p>You can find me at Microsoft working on PowerApps. Or you can
            find me developing some apps for non-profits during my spare time!</p>
        </header>
        <footer>
          <ul class="icons">
            <li><a href="https://www.linkedin.com/in/ercgn" target="_blank" class="fa-linkedin">LinkedIn</a></li>
            <li><a href="https://www.github.com/ercgn" target="_blank" class="fa-github">Github</a></li>
            <li><a href="https://www.instagram.com/ercgn" target="_blank" class="fa-instagram">Instagram</a></li>
          </ul>
        </footer>
      </div>
    )
  }
}

export default WelcomePanel;