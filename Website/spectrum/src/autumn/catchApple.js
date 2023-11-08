import React, { useState, useEffect } from 'react';

const getRandomPosition = () => ({
  top: 0,
  left: Math.random() * window.innerWidth,
});

const CatchTheAppleGame = () => {
  const [applePosition, setApplePosition] = useState(getRandomPosition());
  const [basketPosition, setBasketPosition] = useState({
    top: window.innerHeight - 50,
    left: window.innerWidth / 2 - 25,
  });
  const [score, setScore] = useState(0);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft' && basketPosition.left > 0) {
        setBasketPosition({ ...basketPosition, left: basketPosition.left - 10 });
      } else if (e.key === 'ArrowRight' && basketPosition.left < window.innerWidth - 50) {
        setBasketPosition({ ...basketPosition, left: basketPosition.left + 10 });
      }
    };

    const updateApple = () => {
      setApplePosition(getRandomPosition());
    };

    const moveApple = () => {
      setApplePosition((prevPosition) => ({
        top: prevPosition.top + 5, // Adjust the falling speed as needed
        left: prevPosition.left,
      }));
    };

    const checkCatch = () => {
      if (
        applePosition.top > basketPosition.top &&
        applePosition.top < basketPosition.top + 50 &&
        applePosition.left > basketPosition.left &&
        applePosition.left < basketPosition.left + 50
      ) {
        setScore(score + 1);
        updateApple();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    const basketInterval = setInterval(() => {
      moveApple();
      checkCatch();
    }, 100); // Adjust the interval based on the falling speed

    const appleInterval = setInterval(updateApple, 5000); // Adjust the interval for generating new apples

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      clearInterval(basketInterval);
      clearInterval(appleInterval);
    };
  }, [score, applePosition, basketPosition]);

  return (
    <div>
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
          width: '50px',
          height: '50px',
          backgroundColor: 'blue',
        }}
      />
    </div>
  );
};

export default CatchTheAppleGame;
