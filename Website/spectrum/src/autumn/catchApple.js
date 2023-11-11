import React, { useState, useEffect } from 'react';
import Basket from './basket.png';
import './catchApple.css';

const getRandomPosition = () => ({
  top: 130,
  left: 30 + Math.random() * (window.innerWidth - 60)
});

const CatchTheAppleGame = () => {
  const [applePosition, setApplePosition] = useState(getRandomPosition());
  const [basketPosition, setBasketPosition] = useState({
    top: window.innerHeight - 100,
    left: window.innerWidth / 2 - 50,
  });

  const [score, setScore] = useState(0);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft' && basketPosition.left > 30) {
        setBasketPosition({ ...basketPosition, left: basketPosition.left - 30 });
      } else if (e.key === 'ArrowRight' && basketPosition.left < window.innerWidth - 130) {
        setBasketPosition({ ...basketPosition, left: basketPosition.left + 30 });
      }
    };

    const updateApple = () => {
      setApplePosition(getRandomPosition());
    };

    const moveApple = () => {
      setApplePosition((prevPosition) => {
        const newPosition = {
          top: prevPosition.top + 10, // Adjust the falling speed as needed
          left: prevPosition.left,
        };

        if (newPosition.top + 50 >= basketPosition.top + 100) {
          updateApple(); // Update the apple's position if it falls beneath the basket
        }
    
        return newPosition;
      });
    };
    

    const checkCatch = () => {
      if (
        applePosition.top > basketPosition.top &&
        applePosition.top < basketPosition.top + 100 &&
        applePosition.left > basketPosition.left &&
        applePosition.left < basketPosition.left + 100
      ) {
        setScore(score + 1);
        updateApple();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    const basketInterval = setInterval(() => {
      moveApple();
      checkCatch();

      if (score === 3) {       //CHANGE SCORE TO MOVE ON
        clearInterval(basketInterval);
        clearInterval(appleInterval);
        alert('Game Over! You scored 10 points.');
      }
    }, 70); // Adjust the interval based on the falling speed

    const appleInterval = setInterval(updateApple, 5000); // Adjust the interval for generating new apples

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      clearInterval(basketInterval);
      clearInterval(appleInterval);
    };
  }, [score, applePosition, basketPosition]);

  return (
    <div className="applegame" >
    <div className="game-container">
    <h1>Catch the Apple Game</h1>
      <p>Score: {score}</p>
      <div
        style={{
          position: 'absolute',
          top: applePosition.top,
          left: applePosition.left,
          fontSize: '24px',
        }}
      >
        🍎
      </div>
      <div
        style={{
          position: 'absolute',
          top: basketPosition.top,
          left: basketPosition.left,
          width: '100px',
          height: '100px',
          backgroundImage: `url(${Basket})`,
          backgroundSize: 'cover'
          //backgroundColor: 'blue',
        }}
      />
    </div>
    </div>

  );
};

export default CatchTheAppleGame;
