import React from 'react';

import { Main } from 'components/layouts/Main';
import { Button } from 'components/general/Button';
import { SectionHeader } from 'components/general/SectionHeader';

interface NotFoundPagePropsI {
  title?: string;
}

function NotFoundPage({ title }: NotFoundPagePropsI) {
  const DATA = {
    title: 'Page not found',
    buttons: [
      {
        type: 'Primary_Blue',
        href: '/',
        label: 'Homepage'
      },
      {
        type: 'Secondary_White',
        href: '/contact-us',
        label: 'Contact Us'
      }
    ]
  };

  return (
    <Main>
      <div className="section-gap">
        <div className="container">
          <div className="section-inner-gap justify-center text-center">
            <SectionHeader icon="icon-sections_404" as="h1" title={title || DATA.title} />

            <nav className="flex flex-col md:flex-row gap-64 items-center justify-center">
              {DATA.buttons.map(({ type, href, label }, buttonIndex) => (
                <Button
                  key={`button_${buttonIndex}`}
                  type={type}
                  href={href}
                  label={label}
                  icon="icon-general_arrow"
                />
              ))}
            </nav>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default NotFoundPage;
