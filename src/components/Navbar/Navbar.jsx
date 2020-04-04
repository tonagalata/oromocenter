import React from "react";
import OddaTree from "../../images/odaaTree.png";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

class Navbar extends React.Component {

  state = {
    sidenavOn: false
  }

  handelSidenav = (e) => {
    const M = window.M;
    let elems = document.querySelectorAll(".sidenav");
    let instances = M.Sidenav.init(elems, {});
    console.log(instances)
  }

  componentDidMount() {
    const M = window.M;
    document.addEventListener("DOMContentLoaded", function() {
      let elems = document.querySelectorAll(".sidenav");
      let instances = M.Sidenav.init(elems, {});
      console.log(instances)
    });
    this.handelSidenav()
  }

  render() {
    let sideTransform = this.state.sidenavOn ? 'translateX(-105%)' : 'translateX(0%)'
    return (
      <>
        <nav className={styles.navbar}>
          <div className="nav-wrapper">
            <Link className="brand-logo" style={{ marginLeft: "1rem" }} to="/">
              <div className={styles.logo}>
                <h1>
                  C<img src={OddaTree} alt="logo" />
                </h1>
              </div>
            </Link>
            <p data-target="mobile-demo" className="sidenav-trigger right">
              <i className="material-icons">menu</i>
            </p>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/resources">Resources</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        <ul style={{trnasform: sideTransform ? 'translateX(-105%)' : 'translateX(0%)'}} className="sidenav" id="mobile-demo">
          <Link className="brand-logo" style={{ marginLeft: "1rem" }} to="/">
            <div className={styles.logo}>
              <h1 style={{color: 'rgb(90, 90, 90)'}}>
                C<img src={OddaTree} alt="logo" />
              </h1>
            </div>
          </Link>
          <p onClick={this.handelSidenav}><i className={`material-icons ${styles.closeSidenav}`}>close</i></p>
          <hr/>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </>
    );
  }
}

export default Navbar;
