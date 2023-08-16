import { useEffect, useState } from 'react';

export function useMediaQuery() {
  const [screen, setScreen] = useState({
    screenWidth: 1980,
    screenHeight: 980
  });

  function handleScreenScreen() {
    const screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const screenHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    setScreen({
      screenWidth,
      screenHeight
    });
  }

  useEffect(() => {
    handleScreenScreen();
    window.addEventListener('resize', handleScreenScreen);
  }, []);

  return screen;
}
