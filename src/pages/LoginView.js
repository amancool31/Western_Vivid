import React,{ Component } from "react";
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import SignUpContainer from "./SignUpPage";
import {Input,Button,Card} from 'semantic-ui-react';

 
 
 class LoginView extends Component {
  constructor(props)
  {
    super(props)

  } 
  
  render() {
     return (
      <div>
         
         
      <form onSubmit={this.props.onSubmit}>
      
      <Input fluid  label='Email'
        name="email"
        type="email"
        placeholder="Enter Email"
      /><br/>
    
      
      <Input  fluid label='Password'
        name="password"
        type="password"
        placeholder="Enter Password"
      />
    <br/><br/>
    <p style={{fontWeight: 600}}>{this.props.message.toString()}</p>
    <Button color='blue' inverted type="submit">Login </Button>
  </form>
       
      {/* <SignUpLink /> */}
    <BrowserRouter>
      <Switch>
          <Route path={`/SignUp`} component={SignUpContainer}/>                    
       </Switch>                
    </BrowserRouter>
   </div>
     );
   }
 }
 
 
 
  
  export default LoginView;