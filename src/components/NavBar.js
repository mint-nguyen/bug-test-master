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
    return (
      <div className="app-navbar">
        <div className="flex-container">
          <div className="header">React Debug App</div>
          {/* remove let sessionButton and do the following to get a cleaner code */}
          {this.state.showLogoutButton && (
            <button
              className="flat-button border-gray"
              onClick={this.props.handleLogout}
            >
              Sign Out
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Navbar;
