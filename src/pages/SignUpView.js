import React from "react";

const SignUpView = ({ onSubmit }) => {
  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={onSubmit}>
        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            placeholder="Password"
          />
        </label><br/><br/>
        <button type="submit">Sign Up</button>
        <br/><br/><br/><br/>
      </form>
    </div>
  );
};

export default SignUpView;