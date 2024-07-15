import React from 'react';

interface IconPropsI {
  icon: string;
  className?: string;
}

export function Icon({ icon, className = '' }: IconPropsI) {
  return <i className={`${icon} ${className}`} />;
}
