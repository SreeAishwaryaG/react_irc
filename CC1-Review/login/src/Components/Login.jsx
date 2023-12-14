import React, { useState } from 'react';
import './Login.css'; 
import '@fortawesome/fontawesome-free/css/all.css';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const login = () => {
 
    if (username === 'example' && password === 'password') {
 
      console.log('Login successful');
      setErrorMessage('');
    } else {
      
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h1> Welcome Back!</h1>
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
    required
  />
</div>

<button type="button" onClick={login}>
  Login
</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

    
    </div>
  );
};

export default LoginForm;
