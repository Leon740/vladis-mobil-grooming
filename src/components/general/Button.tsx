import React from 'react';
import { Icon } from './Icon';
import { Img } from './Img';

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
      <span>{label}</span>
      {icon && <Icon icon={icon} className={`text-20 ${iconClassName}`} />}
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
  let classNameVar = `text-ss3-20-bold py-16 px-32 rounded-32 border-2 border-solid border-sky-500 flex flex-row items-center gap-16 w-max transition hover:text-white ${className}`;

  switch (type) {
    case 'Secondary_White':
      classNameVar += ' text-sky-500 bg-white hover:bg-sky-500';
      break;
    case 'Primary_Blue':
      classNameVar += ' text-white bg-sky-500 hover:bg-sky-600 hover:border-sky-600';
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

export function ButtonPaw(props: ButtonPropsI) {
  return (
    <div className="flex flex-row mt-64 pl-64 relative">
      <Img
        src="https://raw.githubusercontent.com/Leon740/vladis-mobil-grooming-frontend/main/src/assets/images/general/paw.svg"
        alt="Vladis Mobil Grooming"
        className="w-128 absolute top-1/2 left-0 -translate-y-1/2 rotate-16 z-0"
      />
      <Button
        {...props}
        className={`z-10 ${props.type === 'Primary_Blue' ? 'border-white' : 'border-sky-500'}`}
      />
    </div>
  );
}
