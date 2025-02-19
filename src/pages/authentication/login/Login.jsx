import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaMedkit } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();  
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", loginData);

    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="welcome-section">
          <FaMedkit className="welcome-icon" />
          <h1 className="welcome-message">Welcome Back!</h1>
          <p className="subtext">Login to continue your health journey</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login to Your Account</h2>
          
          <div className="form-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group password-group">
            <FaLock className="icon" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
            <span 
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          
          <button type="submit">Login</button>
          
          <div className="signup-redirect">
            <p>
              Don't have an account? <Link to="/signup">Sign Up here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
