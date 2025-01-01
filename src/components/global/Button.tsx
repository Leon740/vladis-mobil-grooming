import { Icon } from './Icon';
import { ImgT } from './ImgT';
import { Link, type ILinkProps } from './Link';

type TButtonProps = Omit<ILinkProps, 'children'>;

interface IButtonProps extends TButtonProps {
  style: 'Primary_Blue' | 'Secondary_White';
  label: string;
  icon: string;
  iconClassName?: string;
}

export function Button({
  buttonType,
  href,
  handleClick = () => {},
  isExternal = false,
  className = '',
  style = 'Primary_Blue',
  label,
  icon,
  iconClassName = ''
}: IButtonProps) {
  let classNameVar = `text-ss3-20-bold py-16 px-32 rounded-32 border-2 border-solid border-sky-500 flex flex-row items-center gap-16 w-max transition hover:text-white ${className} `;

  switch (style) {
    case 'Secondary_White':
      classNameVar += 'text-sky-500 bg-white hover:bg-sky-500';
      break;
    case 'Primary_Blue':
      classNameVar += 'text-white bg-sky-500 hover:bg-sky-600 hover:border-sky-600';
      break;
    default:
      classNameVar += '';
      break;
  }

  return (
    <Link
      buttonType={buttonType}
      href={href}
      handleClick={handleClick}
      isExternal={isExternal}
      className={classNameVar}
    >
      <span>{label}</span>
      {icon && <Icon icon={icon} className={`text-20 ${iconClassName}`} />}
    </Link>
  );
}

export function ButtonPaw(props: IButtonProps) {
  return (
    <div className="flex flex-row mt-64 pl-64 relative">
      <ImgT
        src="global/global_paw.svg"
        alt="Vladis Mobil Grooming"
        width={128}
        height={128}
        className="absolute top-1/2 left-0 -translate-y-1/2 rotate-16 z-0"
      />
      <Button
        {...props}
        className={`z-10 ${props.style === 'Primary_Blue' ? 'border-white' : 'border-sky-500'}`}
      />
    </div>
  );
}
