import React, { Component } from 'react';
import styles from '../assets/styles/main.less';

function createWelcomeHeader() {
  return (
    <header>
      <p className={styles.portfolio}>Eric Gan</p>
      <p>I am passionate about developing software for the social good.
        Whether it is developing mobile apps for humanitarian efforts or
        designing a more intuitive UX/UI for a non-profit company, I find
            technology a gateway to unifying the international world.</p>

      <p>You can find me as a</p>
      <ul>
        <li><strong>Full-stack developer</strong> at <a href="https://www.duolingo.com">Duolingo</a> working on <a href="https://events.duolingo.com">Duolingo Events</a>.</li>
        <li><strong>Regional director</strong> of <a href="https://www.basiltech.org">BasilTech</a>, leading a group of volunteers in Seattle to consult with non-profit humanitarian organizations.</li>
        <li><strong>Licensed real estate agent</strong> for <a href="https://ericgan.skylineproperties.com">Skyline Properties</a>, specializing in investment properties.</li>
      </ul>
      Send me an <a href="mailto:me@ericgan.com">email</a> if you want to connect!
    </header>
  );
}

function createWelcomeFooter() {
  return (<footer>
    <ul className={styles.listIcons}>
      <li>
        <a href="https://www.linkedin.com/in/ercgn" target="_blank" className="fa fa-linkedin">
        </a>
      </li>
      <li>
        <a href="https://www.github.com/ercgn" target="_blank" className="fa fa-github">
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/ercgn" target="_blank" className="fa fa-instagram">
        </a>
      </li>
    </ul>
  </footer>);
}

class WelcomePanel extends Component {
  render() {
    return (
      <div className={styles.welcome}>
        {createWelcomeHeader()}
        {createWelcomeFooter()}
      </div>
    )
  }
}

export default WelcomePanel;