import { type ReactNode } from 'preact/compat';

export interface ILinkProps {
  id?: string;
  buttonType?: 'button' | 'submit';
  href?: string;
  handleClick?: () => void;
  isExternal?: boolean;
  className?: string;
  children: ReactNode;
}

export function Link({
  id = '',
  buttonType,
  href,
  handleClick = () => {},
  isExternal = false,
  className = '',
  children
}: ILinkProps) {
  return href && !buttonType ? (
    isExternal || href.includes('https') ? (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      <a href={href} className={className}>
        {children}
      </a>
    )
  ) : (
    // eslint-disable-next-line react/button-has-type
    <button id={id} type={buttonType || 'button'} onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
