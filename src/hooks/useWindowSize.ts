import { useState, useEffect } from 'react';

interface WindowSizeI {
  width: number;
  height: number;
}

const getWindowSizeFn = (): WindowSizeI => ({
  width: window.innerWidth,
  height: window.innerHeight
});

export function useWindowSize() {
  const [windowSizeSt, setWindowSizeSt] = useState(() => getWindowSizeFn());

  const handleWindowOnResizeFn = () => {
    // console.log('handleWindowOnResizeFn');
    // console.log(getWindowSizeFn());
    setWindowSizeSt(getWindowSizeFn());
  };

  useEffect(() => {
    window.addEventListener('resize', () => handleWindowOnResizeFn());

    return () => window.removeEventListener('resize', () => handleWindowOnResizeFn());
  }, []);

  return windowSizeSt;
}
