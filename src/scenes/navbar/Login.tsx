import React from 'react';
import "./Login.css";

const Login: React.FC = () => {
  return (
    <div className='main'>
      <div className='blur1'>
        <div className='login'>
          <h2 className="login-title">Login</h2>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
