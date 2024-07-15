import React from 'react';

import { useState, useEffect, ReactElement } from 'react';
import { Img } from 'components/general/Img';

interface LoaderPropsI {
  children: ReactElement;
  logo: {
    url: string;
    alt: string;
  };
}

export function Loader({ children, logo }: LoaderPropsI) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      setTimeout(() => {
        setIsMounted(true);
      }, 300);
    }
  }, [isMounted]);

  return !isMounted ? (
    <div className="h-screen w-screen flex items-center justify-center">
      <Img src={logo.url} alt={logo.alt} className="w-256" />
    </div>
  ) : (
    children
  );
}
export default Loader;
