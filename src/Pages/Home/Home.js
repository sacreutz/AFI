import React from "react";
import "./style.css";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Jumbotron from "../../Components/Jumbotron/Jumbotron";
import FullWidthCard from "../../Components/Card/FullWidthCard/Card";

function Home() {
  return (
    <div className="pageWrapper">
      <div className="content-box">
        <Header />
        <Jumbotron />
        <div className="card-box">
          <FullWidthCard />
          <FullWidthCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
