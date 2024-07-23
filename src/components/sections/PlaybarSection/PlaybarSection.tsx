import React from 'react';

// import { graphql, useStaticQuery } from 'gatsby';

import { Img } from 'components/general/Img';

import './PlaybarSection.scss';

export function PlaybarSection() {
  interface ImgI {
    url: string;
    alt: string;
  }
  interface DATAI {
    img: ImgI[];
  }

  const DATA: DATAI = {
    img: [
      {
        url: 'https://raw.githubusercontent.com/Leon740/vladis-mobil-grooming-frontend/main/src/assets/images/playbar/playbar_1.jpg',
        alt: 'Vladis Mobile Grooming & Spa'
      },
      {
        url: 'https://raw.githubusercontent.com/Leon740/vladis-mobil-grooming-frontend/main/src/assets/images/playbar/playbar_2.jpg',
        alt: 'Vladis Mobile Grooming & Spa'
      },
      {
        url: 'https://raw.githubusercontent.com/Leon740/vladis-mobil-grooming-frontend/main/src/assets/images/playbar/playbar_3.jpg',
        alt: 'Vladis Mobile Grooming & Spa'
      },
      {
        url: 'https://raw.githubusercontent.com/Leon740/vladis-mobil-grooming-frontend/main/src/assets/images/playbar/playbar_4.jpg',
        alt: 'Vladis Mobile Grooming & Spa'
      },
      {
        url: 'https://raw.githubusercontent.com/Leon740/vladis-mobil-grooming-frontend/main/src/assets/images/playbar/playbar_5.jpg',
        alt: 'Vladis Mobile Grooming & Spa'
      },
      {
        url: 'https://raw.githubusercontent.com/Leon740/vladis-mobil-grooming-frontend/main/src/assets/images/playbar/playbar_6.jpg',
        alt: 'Vladis Mobile Grooming & Spa'
      },
      {
        url: 'https://raw.githubusercontent.com/Leon740/vladis-mobil-grooming-frontend/main/src/assets/images/playbar/playbar_7.jpg',
        alt: 'Vladis Mobile Grooming & Spa'
      },
      {
        url: 'https://raw.githubusercontent.com/Leon740/vladis-mobil-grooming-frontend/main/src/assets/images/playbar/playbar_8.jpg',
        alt: 'Vladis Mobile Grooming & Spa'
      },
      {
        url: 'https://raw.githubusercontent.com/Leon740/vladis-mobil-grooming-frontend/main/src/assets/images/playbar/playbar_9.jpg',
        alt: 'Vladis Mobile Grooming & Spa'
      },
      {
        url: 'https://raw.githubusercontent.com/Leon740/vladis-mobil-grooming-frontend/main/src/assets/images/playbar/playbar_10.jpg',
        alt: 'Vladis Mobile Grooming & Spa'
      },
      {
        url: 'https://raw.githubusercontent.com/Leon740/vladis-mobil-grooming-frontend/main/src/assets/images/playbar/playbar_11.jpg',
        alt: 'Vladis Mobile Grooming & Spa'
      },
      {
        url: 'https://raw.githubusercontent.com/Leon740/vladis-mobil-grooming-frontend/main/src/assets/images/playbar/playbar_12.jpg',
        alt: 'Vladis Mobile Grooming & Spa'
      }
    ]
  };

  // const query = graphql`
  //   query {
  //     strapiPlaybarSection {
  //       img {
  //         url
  //         alt
  //       }
  //     }
  //   }
  // `;

  // const DATA: DATAI = useStaticQuery(query).strapiPlaybarSection;

  return (
    <div className="overflow-hidden">
      <ul className="flex flex-row gap-16 min-w-max PlaybarSection">
        {DATA.img.map(({ url, alt }, imgIndex) => (
          <li key={`img_${imgIndex}`} className="flex-shrink-0 rounded-8 overflow-hidden">
            <Img src={url} alt={alt} className="w-256 object-cover" />
          </li>
        ))}
      </ul>
    </div>
  );
}
