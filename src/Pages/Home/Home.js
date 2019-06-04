import React, {Component} from "react";
import "./style.css";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Jumbotron from "../../Components/Jumbotron/Jumbotron";
import FullWidthCard from "../../Components/Card/FullWidthCard/Card";

let image = "./test.jpeg"

class Home extends Component{
  constructor(props){
  super(props);
    this.state = {
      image1: require("./test.jpeg"),
      image2: require("./test2.jpg")
    }

  }
  render(){
  return (
    <div className="pageWrapper">
      <div className="content-box">

        <Header />
        <Jumbotron />
        <div className="card-box">
          <FullWidthCard value={this.state.image1}/>
          <FullWidthCard value={this.state.image2}/>
        </div>
      </div>
      <Footer />
    </div>
  );
  }
}

export default Home;
