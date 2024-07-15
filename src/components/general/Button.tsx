import React from 'react';

interface ButtonPropsI {
  type: 'Secondary_White' | 'Primary_Blue' | string;
  aType?: 'submit';
  className?: string;
  href?: string;
  onClick?: () => void;
  label: string;
  icon?: string;
  iconClassName?: string;
}

type ButtonInnerPropsT = Pick<ButtonPropsI, 'label' | 'icon' | 'iconClassName'>;

function ButtonInner({ label, icon, iconClassName = '' }: ButtonInnerPropsT) {
  return (
    <>
      {label}
      {icon && <i className={`${icon} text-16 ${iconClassName}`} />}
    </>
  );
}

export function Button({
  type,
  aType,
  className = '',
  href,
  onClick,
  label,
  icon,
  iconClassName = ''
}: ButtonPropsI) {
  let classNameVar = `text-ss3-20-bold py-16 px-32 rounded-32 border-2 border-solid border-sky-500 flex flex-row items-center gap-16 w-max ${className}`;

  switch (type) {
    case 'Secondary_White':
      classNameVar += ' text-sky-500 bg-white hover:bg-sky-500 hover:text-white';
      break;
    case 'Primary_Blue':
      classNameVar += ' text-white bg-sky-500 hover:bg-white hover:text-sky-500';
      break;
    default:
      classNameVar += '';
      break;
  }

  return href && !onClick ? (
    <a href={href} className={classNameVar}>
      <ButtonInner label={label} icon={icon} iconClassName={iconClassName} />
    </a>
  ) : (
    // eslint-disable-next-line react/button-has-type
    <button type={aType || 'button'} className={classNameVar} onClick={onClick}>
      <ButtonInner label={label} icon={icon} iconClassName={iconClassName} />
    </button>
  );
}
