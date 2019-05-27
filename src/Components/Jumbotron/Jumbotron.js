import React, { Component } from "react";
import "./style.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import pic from "./images/994699.jpg";

class Jumbotron extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //states here
    };

    const jumbotronStyle = {
      paddingBottom: "150px",
      boxShadow: "5px 5px 5px 5px rgba(169,169,169,0)"
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
        <div className="card-panel grey lighten-2" style={this.jumbotronStyle}>
          <div className="container">
            <div className="row">
              <img className="picture" src={pic} alt="afi" />
            </div>
            <h1>Page Title</h1>
            <p>Lorem ipsum dolor sit amet, consectetur...</p>
          </div>
        </div>
        <div className="container">Monkey</div>
      </div>
    );
  }
}

export default Jumbotron;
