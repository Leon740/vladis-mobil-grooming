import React from 'react';

import { useRef, useState, useEffect } from 'react';
import { useWindowSize } from 'hooks/useWindowSize';
import { Button } from 'components/general/Button';
import { Icon } from 'components/general/Icon';
import { Img } from 'components/general/Img';
import { Link } from 'gatsby';

interface LinkI {
  url: string;
  label: string;
}

interface HeaderPropsI {
  data: {
    logo: {
      url: string;
      alt: string;
    };
    links: LinkI[];
  };
}

export function Header({ data }: HeaderPropsI) {
  const { logo, links } = data;

  const [menuIsActive, setMenuIsActive] = useState(false);
  const menuRf = useRef<HTMLDivElement>(null);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (menuRf.current) {
      if (windowSize.width < 1280) {
        menuRf.current.style.maxHeight = menuIsActive ? `${menuRf.current.scrollHeight}px` : `0px`;
      } else {
        menuRf.current.style.maxHeight = `${menuRf.current.scrollHeight}px`;
      }
    }
  }, [menuIsActive, windowSize]);

  return (
    <header className="bg-white sticky top-0 z-20 border-b-2 border-solid border-gray-100">
      <div className="container xl:flex xl:justify-between xl:items-center">
        <div className="flex flex-row justify-between items-center">
          <Link to="/">
            <Img src={logo.url} alt={logo.alt} className="w-128" />
          </Link>

          <Button
            type="Primary_Blue"
            label={links[links.length - 1].label}
            href={links[links.length - 1].url}
            icon="icon-general_calendar"
            iconClassName="-order-1"
            className="xl:hidden"
          />

          <button
            type="button"
            aria-label="Toggle Mobile Menu"
            className={`xl:hidden flex flex-col items-center transition-all hover:text-sky-500 ${
              menuIsActive ? 'text-sky-500' : ''
            }`}
            onClick={() => setMenuIsActive((prev) => !prev)}
          >
            <Icon icon="icon-general_bars" className="text-32" />
            <span className="text-ss3-16-regular">Menu</span>
          </button>
        </div>

        <div className="overflow-hidden transition-all" ref={menuRf}>
          <nav className="flex flex-col gap-32 py-16 xl:flex-row xl:p-0 xl:items-center">
            {links.slice(0, links.length - 1).map(({ url, label }: LinkI, linkIndex) => (
              <Link
                key={`link_${linkIndex}`}
                to={url}
                className="text-ss3-20-regular hover:text-sky-500"
                activeClassName="text-sky-500"
              >
                {label}
              </Link>
            ))}

            <Button
              type="Primary_Blue"
              label={links[links.length - 1].label}
              href={links[links.length - 1].url}
              icon="icon-general_calendar"
              iconClassName="-order-1"
              className="hidden xl:flex"
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
