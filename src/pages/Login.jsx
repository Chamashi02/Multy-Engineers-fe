import React from "react";
import "../css/multy.css";

const Login = () => {
    return (
    <main className="login-main">
      <div className="login-card">
        <div className="login-header">
            <p>WELCOME BACK</p>  
            <h2 className="text-2xl font-semibold text-ayur-textDark">
            Login to your account
          </h2>
            <h3>Enter your credentials to access your account.</h3>
        </div>  

        <form className="login-form">
            <div>
                <label label="email">Email</label>
                <input className="fields" type="email" id="email" name="email" placeholder="you@example.com" required />
            </div>
            <div>
                <label label="password">Password</label>
                <input className="fields" type="password" id="password" name="password" placeholder="••••••••" required />
            </div>
            <div className="btn-forgotpw">
                <span className="forgot-pw">Forgot password?</span>
            </div>
            <div> 
                <button className="btn" type="submit">Login</button>
            </div>   
            
        </form>

        <div className="signup-link">
          Don’t have an account?{" "}
          <span className="signup-btn">
            Sign up
          </span>
        </div>
      </div>
    </main> 
    );
};

export default Login;