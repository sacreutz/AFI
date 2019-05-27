import React from "react";
import "./style.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <div className="pageWrapper">
      <div className="content-box">
        <Header />
        <div>Welcome!</div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
