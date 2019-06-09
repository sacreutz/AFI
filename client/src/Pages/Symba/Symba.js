import React from "react";
import "./style.css";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Symba() {
  return (
    <div className="page-wrapper">
      <div className="content-box">
        <Header />
      </div>
      <Footer />
    </div>
  );
}

export default Symba;
