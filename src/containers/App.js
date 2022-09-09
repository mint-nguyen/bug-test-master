import React, { Component } from "react";
import Navbar from "../components/NavBar"; //wrong import, the file name was 'navbar.js' To make it consistent, change 'navbar.js' to 'NavBar.js'
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import { Glyphicon } from "react-bootstrap";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoginForm: true,
      showCheckmark: false,
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this); //bind handleLogin function
  }

  handleLogin() {
    this.refs.navbutton.handleLogoutButton();
    this.setState({
      showLoginForm: false, //once login, the login form should disappear
      showCheckmark: true,
    });
  }

  handleLogout() {
    this.refs.navbutton.handleLogoutButton();
    this.setState({
      showLoginForm: true,
      showCheckmark: false,
    });
  }

  render() {
    return (
      <div className="app">
        <Navbar ref="navbutton" handleLogout={this.handleLogout} />
        <div className={this.state.showLoginForm === true ? "" : "hide"}>
          <LoginForm handleLogin={this.handleLogin} />
        </div>
        <div
          className={
            this.state.showCheckmark === true ? "text-center mt9x" : "hide"
          }
        >
          {/* <Glyphicon glyph="glyphicon glyphicon-ok-sign" /> */}
          <h2>Great work!</h2>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
