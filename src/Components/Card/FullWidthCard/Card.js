import React, { Component } from "react";
import "./style.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

// TODO: pass pic as a prop from the page, otherwise will have to create separate Card components for each page
// TODO: presets w/ smaller, larger, text-only components

class FullWidthCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: require("../../Jumbotron/images/994699.jpg")
    };
  }

  componentDidMount() {
    M.AutoInit();
    this.mountCard();
  }

  mountCard = () => {
    document.addEventListener("DOMContentLoaded", function() {
      //   var elems = document.querySelectorAll(".sidenav");
      //   var instances = M.Sidenav.init(elems, {});
    });
  };

  render() {
    return (
      <div className="row centered-row">
        <div className="col s12 m12 lg12">
          <div className="card">
            <div className="cardImage">
              <img
                className="card-picture"
                src={this.state.image}
                alt="bada bing bada boom"
              />
              <br />
              <span className="card-title">Title</span>
            </div>
            <div className="card-content">
              <p>Bucca di beppo</p>
            </div>
            <div className="card-action">
              <a href="...">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FullWidthCard;
