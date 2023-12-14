

import React, { useState } from 'react';
import './Register.css';
import '@fortawesome/fontawesome-free/css/all.css';

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
        if (!username || !email || !password || !confirmPassword || !ageGroup || !category) {
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
    <div className="register-container">
      <h1>Join ToyT!</h1>
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

        <div className="input-group">
          <i className="fas fa-birthday-cake icon"></i>
          <select
            id="ageGroup"
            name="ageGroup"
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value)}
            required
          >
            <option value="" disabled>Select Age</option>
            
    <option value="1_month">1 Month</option>
    <option value="1_to_6_months">1-6 Months</option>
    <option value="6_to_12_months">6-12 Months</option>
    <option value="1_to_2_years">1-2 Years</option>
    <option value="2_to_5_years">2-5 Years</option>
    <option value="6_to_10_years">6-10 Years</option>
    <option value="11_to_14_years">11-14 Years</option>
    <option value="15_to_18_years">15-18 Years</option>
    <option value="18_to_30_years">18-30 Years</option>
    <option value="31_to_50_years">31-50 Years</option>
    <option value="over_50_years">Over 50 Years</option>
          </select>
        </div>

        <div className="input-group">
            <i className="fas fa-robot icon"></i>
          <select
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="" disabled>Select Category</option>
            <option value="action_figures">Action Figures</option>
            <option value="board_games">Board Games</option>
            <option value="stuffed_animals">Stuffed Animals</option>
            <option value="building_blocks">Building Blocks</option>
          </select>
        </div>

        <button type="button" onClick={register} className='btn'>
          Ready to have fun?
                  </button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default RegisterForm;
