import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div className='background-container'>
        <div className='box2'>
          <Navbar/>
        </div>
        <div className='text'>CHOOSE A SEASON</div>
      </div>
    </>
  );
}

export default App;
