import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/cards';

function App() {
  return (
    <>
      <div className='background-container'>
        <div className='box2'>
          <Navbar/>
          <div className='text'>CHOOSE A SEASON</div>
          <Cards/>
        </div>
        
      </div>
    </>
  );
}

export default App;
