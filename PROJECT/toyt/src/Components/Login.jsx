import React, { useState } from 'react';
import './Login.css'; 
import '@fortawesome/fontawesome-free/css/all.css';
import {useTheme } from './ThemeContext.jsx';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { theme, toggleTheme } = useTheme();
  const login = () => {
    // Trim white spaces from input values
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();
  
    // Reset error message
    setErrorMessage('');
    setSuccessMessage('');
    // Check for empty fields
    if (!trimmedUsername) {
      setErrorMessage('Please enter username');
      return;
    }
    if (!trimmedPassword) {
      setErrorMessage('Please enter password');
      return;
    }
  
    if (trimmedPassword.length < 8) {
      setErrorMessage('Password must be at least 8 characters long');
      return;
    }
  
    // Debugging: Log the trimmed values
    console.log('Trimmed Username:', trimmedUsername);
    console.log('Trimmed Password:', trimmedPassword);
  
    alert("Login successful");
    navigate('/');
    // setSuccessMessage('Login successful');
     
  
  };
  

  return (
    <div style={{ background: theme === 'light' ? 'white' : '#333', color: theme === 'light' ? '#333' : '#fff' }}>
       <button onClick={toggleTheme} className="theme-toggle-button">
     {theme === 'light' ? '🌞' : '🌜'}
     </button>
    <div className="login-container">
      <h1 className='loginh1'> Welcome Back!</h1>
      <form>
      <div className="input-group">
  <i className="fas fa-user icon"></i>
  <input
    type="text"
    id="username"
    name="username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    placeholder="Enter your username"
    required
  />
</div>

<div className="input-group">
  <i className="fas fa-lock icon"></i>
  <input
    type="password"
    id="password"
    name="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Enter your password"
    
  />
</div>

<button type="button" className="buttonl" onClick={login}>
  Login
</button>
   </form>
    {errorMessage && <p className="error-message">{errorMessage}</p>}

     <p style={{ fontFamily: 'Comic Sans MS',color:'black',fontSize:'13px',marginTop:'8%'}}>
      Don't have an account ?<Link to='/reg'style={{ fontFamily: 'Comic Sans MS',color:'blue',fontSize:'13px',marginLeft:'2px' }}>Register</Link>
     </p>
    </div>
    </div>
  );
};

export default LoginForm;
