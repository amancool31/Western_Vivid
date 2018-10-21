import React, { Component } from "react";
import {Button,Icon} from 'semantic-ui-react';
import auth from "../Firebase_config";
import  firebase from 'firebase';

import SignUpView from "./SignUpView";

class SignUpContainer extends Component {
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
      const user = await auth.createUserWithEmailAndPassword(email.value, password.value).then(
        ()=>{
           
          firebase.auth().currentUser.sendEmailVerification().then(
            ()=>{
               this.setState({message:'We have sent you a verification Email to your inbox at '+firebase.auth().currentUser.email+'. To make use of our services you must verify your account'})
            }
          )
          .catch(()=>{
            console.log('Could not send verification Email')
          })
        }
      );
      
      // this.props.history.push("/");
    } catch (error) {
      this.setState({message:error})
    }
  };

  render() {
    return(
      <div>
        <SignUpView onSubmit={this.handleSignUp}  message={this.state.message}/>
        
      </div>

    )
  }
}

export default SignUpContainer;