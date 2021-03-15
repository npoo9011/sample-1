import React, { Component } from "react";
import Login from "../Login/Login";
// here is the home Class where Land the page means its our landing page
export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Import the  component of NAVBAR */}
        <Login />
      </React.Fragment>
    );
  }
}
