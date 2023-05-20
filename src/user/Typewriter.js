import React, { useEffect, useState } from 'react';

const Typewriter = ({ text }) => {
    const [displayText, setDisplayText] = useState('');
  
    useEffect(() => {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex === text.length) {
          currentIndex = 0; // Reset currentIndex to restart typing
          setDisplayText('');
          return;
        }
  
        setDisplayText((prevDisplayText) => prevDisplayText + text[currentIndex]);
        currentIndex++;
      }, 400);
  
      return () => clearInterval(intervalId);
    }, [text]);
  
    return <span>{displayText}</span>;
  };
  
  export default Typewriter;
  
