import React from 'react';

// import { graphql, useStaticQuery } from 'gatsby';

import { Img } from 'components/general/Img';
import { ButtonPaw } from 'components/general/Button';
import { SectionHeader } from 'components/general/SectionHeader';

export function HeroSection() {
  interface DATAI {
    title: string;
    paragraph: string;
    buttonLabel: string;
    buttonUrl: string;
    img: {
      url: string;
      alt: string;
    };
  }

  const DATA: DATAI = {
    title: 'Doorstep Dog Grooming',
    paragraph: 'Serving PA, NJ, NY, DE',
    buttonLabel: '267-977-1310',
    buttonUrl: 'tel:2679771310',
    img: {
      url: 'https://raw.githubusercontent.com/Leon740/vladis-mobil-grooming-frontend/main/src/assets/images/hero/hero_img.png',
      alt: 'Vladis Mobile Grooming & Spa in PA, NJ, DE, NY'
    }
  };

  // const query = graphql`
  //   query {
  //     strapiHeroSection {
  //       title
  //       paragraph
  //       buttonLabel
  //       buttonUrl
  //       img {
  //         url
  //         alt
  //       }
  //     }
  //   }
  // `;

  // const DATA: DATAI = useStaticQuery(query).strapiHeroSection;

  return (
    <div className="pt-64 xl:pt-128">
      <div className="container">
        <div className="section-inner-gap xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-col gap-32">
            <SectionHeader as="h1" title={DATA.title} paragraph={DATA.paragraph} />
            <ButtonPaw
              type="Primary_Blue"
              href={DATA.buttonUrl}
              label={DATA.buttonLabel}
              icon="icon-contacts_phone"
              iconClassName="-order-1"
            />
          </div>

          <Img src={DATA.img.url} alt={DATA.img.alt} className="w-512 self-center" />
        </div>
      </div>
    </div>
  );
}
