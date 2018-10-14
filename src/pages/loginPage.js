import React, { Component } from "react";
import { withRouter } from "react-router";
import auth from "../Firebase_config";
import LoginView from "./LoginView";

class LoginContainer extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await auth.signInWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return <LoginView onSubmit={this.handleSignUp} />;
  }
}

export default withRouter(LoginContainer);