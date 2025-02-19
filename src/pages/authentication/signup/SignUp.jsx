import React, { useState } from 'react';
import { 
  FaUser, 
  FaUserTie, 
  FaUserCircle, 
  FaEnvelope, 
  FaPhone, 
  FaLock, 
  FaEye, 
  FaEyeSlash, 
  FaMedkit 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    username: '',
    email: '',
    phone: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="welcome-section">
          <FaMedkit className="welcome-icon" />
          <h1 className="welcome-message">Welcome to PharmaCare!</h1>
          <p className="subtext">Your Trusted Partner in Health</p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Create Your Account</h2>
          
          <div className="form-group">
            <FaUser className="icon" />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <FaUserTie className="icon" />
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              value={formData.surname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <FaUserCircle className="icon" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <FaPhone className="icon" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
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
              value={formData.password}
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

          <button type="submit">Sign Up</button>

          <div className="login-redirect">
            <p>
              Already registered? <Link to="/login">Login here</Link>
            </p>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
