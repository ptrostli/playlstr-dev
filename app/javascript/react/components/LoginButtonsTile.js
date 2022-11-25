import React from "react";
import { Link } from "react-router-dom";

const LoginButtonsTile = (props) => {

  return (
    <div className="login-options">
      <p>LoginButtonsTile</p>
      <Link to="/users/sign_in">Log In</Link>
      <Link to="/users/sign_up">Sign Up</Link>
    </div>
  )
}

export default LoginButtonsTile