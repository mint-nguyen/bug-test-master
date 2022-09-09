import React, { Component } from "react";
import Navbar from "../components/NavBar"; //wrong import, the file name was 'navbar.js' To make it consistent, change 'navbar.js' to 'NavBar.js'
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
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
    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggleGreatWork = this.toggleGreatWork.bind(this);
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

  toggleLogin(state) {
    return state.showLoginForm === true ? "" : "hide";
  }

  toggleGreatWork(state) {
    return state.showCheckmark === true ? "text-center mt9x" : "hide";
  }

  render() {
    return (
      <div className="app">
        <Navbar ref="navbutton" handleLogout={this.handleLogout} />
        <div className={this.toggleLogin(this.state)}>
          {/* avoid inline function */}
          <LoginForm handleLogin={this.handleLogin} />
        </div>
        <div className={this.toggleGreatWork(this.state)}>
          <span class="glyphicon glyphicon-ok-sign"></span>
          {/* Glyphicol not supportted, used span instead */}
          <h2>Great work!</h2>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
