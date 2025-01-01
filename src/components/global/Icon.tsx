export interface IIconProps {
  icon: string;
  className?: string;
}

export function Icon({ icon, className = '' }: IIconProps) {
  return <i className={`icon-${icon} ${className}`} />;
}
