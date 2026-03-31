import React from "react";
import "../css/multy.css";

const Register = () => {
    return (
    <main className="register-main">
      <div className="register-card">
        <div className="login-header">
            <p>CREATE AN ACCOUNT</p>  
            <h2 className="text-2xl font-semibold text-ayur-textDark">
            Join with Multy-Engineers
          </h2>
            <h3>Fill in the details to create your account.</h3>
        </div>  

        <form className="register-form">
            <div>
                <label label="name">Name</label>
                <input className="fields" type="text" id="name" name="name" placeholder="Enter your full name" required />
            </div>
            <div>
                <label label="email">Email</label>
                <input className="fields" type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div>
                <label label="password">Create a password</label>
                <input className="fields" type="password" id="password" name="password" placeholder="Enter your password" required />
            </div><div>
                <label label="confirm-password">Confirm Password</label>
                <input className="fields" type="password" id="confirm-password" name="confirm-password" placeholder="Re-enter your password" required />
            </div>
            <div> 
                <button className="btn" type="submit">Sign Up</button>
            </div>   
        </form>

        <div className="signup-link">
          Already have an account?{" "}
          <span className="signup-btn">
            Login
          </span>
        </div>
      </div>
    </main> 
    );
};

export default Register;