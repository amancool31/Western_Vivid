import React, { Component } from "react";
import { withRouter } from "react-router";
import auth from "../Firebase_config";

import SignUpPage from "./SignUpView";

class SignUpContainer extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await auth.createUserWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return <SignUpPage onSubmit={this.handleSignUp} />;
  }
}

export default withRouter(SignUpContainer);