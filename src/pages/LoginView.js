import React from "react";
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import SignUpContainer from "./SignUpPage";

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to='/signup' >Sign Up</Link>
  </p>

const LoginView = ({ onSubmit }) => {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
        <label>
            Email :
            <input
              name="email"
              type="email"
              placeholder="Email"
            /><br/>
          </label>
          <label>
            Password :
            <input
              name="password"
              type="password"
              placeholder="Password"
            />
          </label><br/>
          <button type="submit">Login </button>
        </form>
        <SignUpLink />
      <BrowserRouter>
        <Switch>
            <Route path={`/SignUp`} component={SignUpContainer}/>                    
         </Switch>                
      </BrowserRouter>
     </div>
        );
  };
  
  export default LoginView;