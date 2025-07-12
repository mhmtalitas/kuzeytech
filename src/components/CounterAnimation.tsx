import React, { useState, useEffect } from 'react';

interface CounterAnimationProps {
  targetValue: number;
  duration: number; // in milliseconds
  suffix?: string;
}

const CounterAnimation: React.FC<CounterAnimationProps> = ({ targetValue, duration, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: DOMHighResTimeStamp;
    const step = (timestamp: DOMHighResTimeStamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * targetValue));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
    return () => {
      // Cleanup if needed (though requestAnimationFrame handles it well)
    };
  }, [targetValue, duration]);

  return (
    <span>{count}{suffix}</span>
  );
};

export default CounterAnimation; 