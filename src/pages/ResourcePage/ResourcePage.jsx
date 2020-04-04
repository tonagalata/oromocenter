import React from "react";
import { ReactComponent as Goto } from "../../images/goto.svg";
import styles from "./ResourcePage.module.css";

class ResourcePage extends React.Component {
  state = {
    address: this.props.address
  };

  render() {
    return (
      <>
        <div className={`container ${styles.mainContent}`}>
          <h2 className="center">Resources</h2>
          <div>
            <h4>Unemployment Services</h4>
            <div>
              <ul>
                <li>
                  <a href="https://uimn.org/applicants/" target="_blank" rel="noopener noreferrer">
                    <Goto /> Minnesota Unemployment Office
                  </a>
                  <div>
                    <p>
                      This is the official resource for information about
                      Minnesota Unemployment Insurance (UI) benefits. UI benefits provide a temporary partial wage replacementto workers who become unemployed through no fault of their own. If you have become unemployed or had your hours greatly reduced, complete the Application Process – we will determine whether or not you are eligible and notify you.
                    </p>
                  </div>
                </li>
                <li>
                  <a href="https://does.dc.gov/service/start-your-unemployment-compensation-process" target="_blank" rel="noopener noreferrer">
                    <Goto /> Washington, DC Unemployment Office
                  </a>
                  <div>
                  <p>
                  The District offers multiple ways to file for unemployment compensation. Begin here to start the process of filing, reviewing, or just checking the status of your claim for your unemployment benefits.
                    </p>
                  </div>
                </li>
                <li>
                  <a href="http://www.vec.virginia.gov/unemployed" target="_blank" rel="noopener noreferrer">
                    <Goto /> Virginia Unemployment Office
                  </a>
                  <div>
                  <p>
                  The VEC's Virginia Workforce Connection (VAWC) offers multiple ways to file for unemployment compensation. Begin here to start the process of filing, reviewing, or just checking the status of your claim for your unemployment benefits.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4>Health Services</h4>
            <div>
              [content]
              <div>Yes</div>
              <div>No</div>
            </div>
          </div>
          <div>
            <h4>Technology Services</h4>
            <div>
              [content]
              <div>Yes</div>
              <div>No</div>
            </div>
          </div>
          <div>
            <h4>Food Services</h4>
            <div>
              [content]
              <div>Yes</div>
              <div>No</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ResourcePage;
