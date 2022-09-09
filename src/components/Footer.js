import React, { Component } from "react";
import "../styles/App.css";

class Footer extends Component {
  //typo error, extend => extends
  render() {
    return (
      <div>
        <div className="footer-anchor"></div>
        <div className="app-footer"></div>
      </div>
    );
  }
}

export default Footer;
