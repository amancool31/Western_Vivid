import React, { Component } from "react";
import {Button,Icon} from 'semantic-ui-react';
import firebase from 'firebase';
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

  handleGoogleSignIn()
  {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      ({user})=>{
      console.log('SIGNED UP WITH GOOGLE '+user.email)
      }
       ).catch(
        ()=>{
          console.log('GOOGLE SIGN UP FAILED')
        }
      )
  }

  handleFBSignIn()
{
  firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
  ({user})=>{
   //Put a condition if user is already verified or not
  firebase.auth().currentUser.sendEmailVerification().then(
    ()=>{
      alert('We have sent you a verification Email to your inbox at '+firebase.auth().currentUser.email+'. To make use of our services you must verify your account')
    }
  )
  }
   ).catch(
    (err)=>{
     this.setState({message:err})
    }
  )
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
    return (<div>
      <LoginView onSubmit={this.handleSignUp} message={this.state.message}/><br/><br/>
      <Button onClick={()=>{this.handleFBSignIn()}} color='blue' ><Icon name='facebook' />SIGN IN WITH FACEBOOK</Button>
      <Button   color='red' onClick={()=>{this.handleGoogleSignIn()}}><Icon name='google' />SIGN IN WITH GOOGLE</Button>
      </div>)
  }
}

export default LoginContainer;