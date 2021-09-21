import { useState, useEffect } from 'react';

const useMousePosition = () => {
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
  return positions;
};

export default useMousePosition;
