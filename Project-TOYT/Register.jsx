import React, { useState } from 'react';
import './Register.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [category, setCategory] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const register = () => {
        if (!username || !email || !password || !confirmPassword) {
      setErrorMessage('Please fill in all fields');
      setSuccessMessage('');
      return;
    }

    
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      setSuccessMessage('');
      return;
    }

    
    setErrorMessage('');
    setSuccessMessage('Registered successfully!');
  
  };

  return (
    <div className='regbody'>
    <div className="register-container">
      <h1 className='regh1'>Join ToyT!</h1>
      <form>
        <div className="input-group">
          <i className="fas fa-user icon"></i>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>

        <div className="input-group">
          <i className="fas fa-envelope icon"></i>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
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
            placeholder="Password"
            required
          />
        </div>

        <div className="input-group">
          <i className="fas fa-lock icon"></i>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />
        </div>

       

        

        <button type="button" className="buttonr" onClick={register} >
          Ready to have fun?
      </button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}

      <p>
        Already have an account?<Link to='/login'>Login</Link>
      </p>
    </div>
    </div>
  );
};

export default RegisterForm;
