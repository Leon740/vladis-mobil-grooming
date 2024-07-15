import React from 'react';

interface ImgPropsI {
  src: string;
  alt: string;
  className?: string;
}

export function Img({ src, alt, className = '' }: ImgPropsI) {
  return <img src={src} alt={alt} className={className} />;
}
