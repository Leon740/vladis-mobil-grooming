import DATA from './headerData.json';
import { Link } from '@components/global/Link';
import { Img } from '@components/global/Img';
import { Button } from '@components/global/Button';
import { Icon } from '@components/global/Icon';
import { Menu } from './Menu';
import { SocialNav } from '@partials/SocialNav/SocialNav';
import { useState } from 'preact/hooks';

function AppointmentButton() {
  return (
    <Button
      href={DATA.button.href}
      style="Primary_Blue"
      label={DATA.button.label}
      icon={DATA.button.icon}
      iconClassName="-order-1"
    />
  );
}

interface IHeaderInnerProps {
  currentPath: string;
}

export function HeaderInner({ currentPath }: IHeaderInnerProps) {
  const [isOpenedSt, setIsOpenedSt] = useState(false);

  const handleButtonClick = () => {
    setIsOpenedSt((prev) => !prev);
  };

  return (
    <>
      <header className="w-full bg-white sticky top-0 z-header1000 border-solid border-b-2 border-gray-100">
        <div className="container flex flex-row items-center justify-between">
          <Link href="/">
            <Img
              src={DATA.logo.src}
              alt={DATA.logo.alt}
              width={128}
              height={128}
              className="w-96 xl:w-128"
              isLazy={false}
            />
          </Link>

          <div className="xl:hidden">
            <AppointmentButton />
          </div>

          <Link
            buttonType="button"
            className={`xl:hidden hover:text-sky-500 ${isOpenedSt ? 'text-sky-500' : ''}`}
            handleClick={handleButtonClick}
            aria-label="Toggle Menu"
          >
            <span className="flex flex-col items-center">
              <Icon icon={isOpenedSt ? 'global_close' : 'global_bars'} className="text-32" />
              <span className="text-16">{isOpenedSt ? 'Close' : 'Menu'}</span>
            </span>
          </Link>

          <div className="hidden xl:flex flex-row gap-32 items-center">
            <Menu className="flex-row gap-32" links={DATA.links} currentPath={currentPath} />

            <AppointmentButton />
          </div>
        </div>
      </header>

      <div
        className={`xl:hidden w-full h-dvh lg:h-auto pt-[98px] bg-white fixed top-0 z-menu100 transition-transform duration-500 ${isOpenedSt ? ' translate-y-0' : '-translate-y-full'} border-solid border-b-2 border-gray-100`}
      >
        <div className="container flex flex-col gap-32 py-32">
          <Menu className="flex-col gap-16" links={DATA.links} currentPath={currentPath} />
          <SocialNav />
        </div>
      </div>
    </>
  );
}
