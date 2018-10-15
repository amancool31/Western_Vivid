import React, { Component } from "react";
 
import auth from "../Firebase_config";
import LoginView from "./LoginView";

class LoginContainer extends Component {
  constructor()
  {
    super()
    this.state={
      message:''
    }
  }
  
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await auth.signInWithEmailAndPassword(email.value, password.value).then(
        this.setState({message:'You have successfully logged in . Press anywhere outside the box to browse the website'})
      );
      // this.props.history.push("/");
    } catch (error) {
      this.setState({message:error})
    }
  };

  render() {
    return <LoginView onSubmit={this.handleSignUp} message={this.state.message}/>;
  }
}

export default LoginContainer;