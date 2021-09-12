import React, { Component } from "react";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
class PageWrapper extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>{this.props.children}</div>
        <Footer/>
      </div>
    );
  }
}

export default PageWrapper;
