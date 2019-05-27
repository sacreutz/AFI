import React from "react";
import "./style.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Jumbotron from "../../Components/Jumbotron/Jumbotron";

function Home() {
  return (
    <div className="pageWrapper">
      <div className="content-box">
        <Header />
        <Jumbotron />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
