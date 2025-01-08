import { Link } from '@components/global/Link';

interface ILink {
  href: string;
  label: string;
}

interface IMenuProps {
  className: string;
  links: ILink[];
  currentPath: string;
}

export function Menu({ className = '', links, currentPath = '' }: IMenuProps) {
  return (
    <ul className={`flex ${className}`}>
      {links.map(({ href, label }) => (
        <li key={label}>
          <Link
            href={href}
            className={`text-ss3-20-regular hover:text-sky-500 ${currentPath === href ? 'text-sky-500' : ''}`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
