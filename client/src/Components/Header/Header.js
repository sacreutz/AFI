import React, { Component } from "react";
import Link from "next/link";
import "./style.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    M.AutoInit();
    this.mountHeader();
  }

  mountHeader = () => {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, {});
    });
  };

  render() {
    return (
      <div id="pageContainer">
        <nav>
          <div className="nav-wrapper header">
            <a href="#!" className="brand-logo logoLink">
              AFI
            </a>

            {/* Triggers hamburger nav when screen resized */}
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons menu">menu</i>
            </a>

            {/* Links */}
            <ul className="right hide-on-med-and-down">
              <li>
                <a className="headerLink" href="...">
                  Home
                </a>
              </li>
              <li>
                <Link href="/symba">
                  <a className="headerLink">Symba</a>
                </Link>
              </li>
              <li>
                <a className="headerLink" href="collapsible.html">
                  Resources
                </a>
              </li>
              <li>
                <a className="headerLink" href="mobile.html">
                  Why
                </a>
              </li>
              <li>
                <a className="headerLink" href="mobile.html">
                  Who
                </a>
              </li>
              <li>
                <a className="headerLink" href="mobile.html">
                  What
                </a>
              </li>
              <li>
                <a className="headerLink" href="mobile.html">
                  Contact
                </a>
              </li>
              <li>
                <a className="headerLink" href="mobile.html">
                  Why
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Links within hamburger nav */}
        <ul className="sidenav" id="mobile-demo">
          <li>
            <a className="headerLink" href="sass.html">
              Home
            </a>
          </li>
          <li>
            <a className="headerLink" href="badges.html">
              Symba
            </a>
          </li>
          <li>
            <a className="headerLink" href="collapsible.html">
              Resources
            </a>
          </li>
          <li>
            <a className="headerLink" href="mobile.html">
              Why
            </a>
          </li>
          <li>
            <a className="headerLink" href="mobile.html">
              Who
            </a>
          </li>
          <li>
            <a className="headerLink" href="mobile.html">
              What
            </a>
          </li>
          <li>
            <a className="headerLink" href="mobile.html">
              Contact
            </a>
          </li>
          <li>
            <a className="headerLink" href="mobile.html">
              Why
            </a>
          </li>
        </ul>

        {/* <Switch>
          <Route exact path="/" component={Home} />
        </Switch> */}
      </div>
    );
  }
}

export default Header;
