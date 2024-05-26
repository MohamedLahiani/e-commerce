import React, { useState } from 'react';
import './Login.css';
import logo from '../assets/logo.png'; // Adjust path accordingly

export function Login() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="login-page">
      <div className={`login-container ${isFlipped ? 'flipped' : ''}`}>
        <div className="login-front">
          <img height={60} width={60} src={logo} alt="Logo" className="logo" />
          <h2>Login</h2>
          <form onSubmit={(e) => { e.preventDefault(); console.log('Email:', e.target.email.value, 'Password:', e.target.password.value); }}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="login-btn">Login</button>
          </form>
          <div className="login-links">
            <p>Don't have an account? <a href="#sign-up" className="sign-up" onClick={handleFlip}>Sign up</a></p>
          </div>
        </div>
        <div className="login-back">
          <img height={60} width={60} src={logo} alt="Logo" className="logo" />
          <h2>Sign Up</h2>
          <form onSubmit={(e) => { e.preventDefault(); console.log('Email:', e.target.email.value, 'Password:', e.target.password.value, 'Confirm Password:', e.target.confirmPassword.value); }}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" name="confirmPassword" required />
            </div>
            <button type="submit" className="login-btn">Sign Up</button>
          </form>
          <div className="login-links">
            <p>Already have an account? <a href="#login" className="sign-up" onClick={handleFlip}>Login</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
