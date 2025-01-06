
import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-toggle">
        <button
          className={`toggle-button ${isLogin ? "active" : ""}`}
          onClick={() => setIsLogin(true)}
        >
          LOGIN
        </button>
        <button
          className={`toggle-button ${!isLogin ? "active" : ""}`}
          onClick={() => setIsLogin(false)}
        >
          REGISTER
        </button>
      </div>

      {isLogin ? (
        <div className="auth-form">
          <h2>Sign in with:</h2>
          <div className="social-icons">
            <span className="icon">f</span>
            <span className="icon">g</span>
            <span className="icon">t</span>
            <span className="icon">gh</span>
          </div>
          <p>or:</p>
          <form>
            <input type="text" placeholder="Email or username" />
            <input type="password" placeholder="Password" />
            <div className="options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className="submit-button">SIGN IN</button>
          </form>
          <p>
            Not a member? <span onClick={() => setIsLogin(false)}>Register</span>
          </p>
        </div>
      ) : (
        <div className="auth-form">
          <h2>Create an account</h2>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit" className="submit-button">REGISTER</button>
          </form>
          <p>
            Already a member? <span onClick={() => setIsLogin(true)}>Login</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
