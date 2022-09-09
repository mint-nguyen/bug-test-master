import React, { Component } from "react";
import "../styles/App.css";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = { showLogoutButton: false }; // add `.state` next to this, missing state
  }

  handleLogoutButton() {
    this.setState((prev) => ({
      showLogoutButton: !prev.showLogoutButton,
    }));
  }

  render() {
    let sessionButton;
    if (this.state.showLogoutButton === true) {
      sessionButton = (
        <button
          className="flat-button border-gray"
          onClick={this.props.handleLogout}
        >
          Sign Out
        </button>
      );
    }
    return (
      <div className="app-navbar">
        <div className="flex-container">
          <div className="header">React Debug App</div>
          {sessionButton}
        </div>
      </div>
    );
  }
}

export default Navbar;
