import React from 'react';
import './loginsignupstyle.css';
import logoimage from './logo.png';
import LoginPage1 from './login.jsx';

export default function LoginPage() {
  return (
    <div className="login-card-container">
      <div className="login-card">
        <div className="login-card-logo">
        <img src={logoimage} alt="logo" />
        </div>
        <div className="login-card-header">
          <h1>Spectrum World</h1>
          <div>Please signup to use the platform</div>
        </div>
        <form className="login-card-form">
          <div className="form-item">
            <input type="text" placeholder="Enter Email" id="emailForm" required />
          </div>
          <div className="form-item">
            <input type="password" placeholder="Enter Password" id="passwordForm" required />
          </div>
          <div className="form-item">
            <input type="password" placeholder="Renter Password" id="passwordForm" required />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <div className="login-card-footer">
          Already have an account? <a href="#" onClick={LoginPage1}>Login.</a>
        </div>
      </div>
      <div className="login-card-social">
        <div>Other Sign-Up Options</div>
        <div className="login-card-social-btns">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-facebook"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-google"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
  
}
