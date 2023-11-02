import React from 'react'
import './Navbar.css'
import logo from './Assests/SW_logo.png'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg">
    <div class="container-fluid box">
        
      <div className="nav-item text_nav">
      <img src = {logo} placeholder='logo' class="logo"/>
        Spectrum World
        </div>
      <div className='nav'>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link nav_options" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav_options" href="#">Games</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav_options" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav_options" href="#">Profile</a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar;
