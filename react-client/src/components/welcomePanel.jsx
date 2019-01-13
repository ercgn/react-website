import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import styles from '../assets/styles/main.less';
import resumePdf from '../assets/resume2019.pdf';

function createWelcomeHeader() {
  return (
    <header>
      <p id={styles.portfolio}>Eric Gan</p>
      <p>I am passionate about developing software for the social good.
        Whether it is developing mobile apps for humanitarian efforts or
        designing a more intuitive UX/UI for a non-profit company, I find
            technology a gateway to unifying the international world.</p>

      <p>You can find me at Microsoft working on PowerApps. Or you can
            find me developing some apps for non-profits during my spare time!</p>

      <ul className={styles.listButtons}>
        {/* <li><Button>Projects</Button></li> */}
        {/* <li><a target="_blank" href={resumePdf}><Button>Resume</Button></a></li> */}
      </ul>
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
    <p>Theme and design made using <a href="https://reactjs.org">ReactJS</a></p>
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