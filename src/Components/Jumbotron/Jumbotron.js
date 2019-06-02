import React, { Component } from "react";
import "./style.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

// TODO: pass pic as a prop from the page, otherwise will have to create separate Jumbotron components for each page
// TODO: presets w/ smaller, larger, text-only components

class Jumbotron extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: require("./images/994699.jpg")
      //states here
    };
  }

  componentDidMount() {
    M.AutoInit();
    this.mountJumbotron();
  }

  mountJumbotron = () => {
    document.addEventListener("DOMContentLoaded", function() {
      //   var elems = document.querySelectorAll(".sidenav");
      //   var instances = M.Sidenav.init(elems, {});
    });
  };

  render() {
    return (
      <div id="pageWrapper">
        <div
          className="card-panel"
          style={{
            backgroundImage: `url(${this.state.image})`,
            backgroundSize: "1000px 250px",
            boxShadow: "5px 5px 5px 5px rgba(169,169,169,0)"
          }}
        >
          <div className="container">
            <div className="row" />
            <h1>Page Title</h1>
            <p>Lorem ipsum dolor sit amet, consectetur...</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
