import React, { useState, useEffect } from 'react';

const MouseTracker: React.FC = () => {
  const [positions, setPositions] = useState({
    x: 0,
    y: 0,
  });
  // 执行当前effect清除前面的effect
  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setPositions({
        x: e.clientX,
        y: e.clientY,
      });
    };
    document.addEventListener('click', updateMouse);
    return () => {
      document.removeEventListener('click', updateMouse);
    };
  }, [positions]);
  return <div>{positions.x}</div>;
};

export default MouseTracker;
