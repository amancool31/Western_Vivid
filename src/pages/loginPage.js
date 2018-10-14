import React, { Component } from "react";
 
import auth from "../Firebase_config";
import LoginView from "./LoginView";

class LoginContainer extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await auth.signInWithEmailAndPassword(email.value, password.value).then(
        ()=>{alert(email.value + ' Logged in')}
      );
      // this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return <LoginView onSubmit={this.handleSignUp} />;
  }
}

export default LoginContainer;