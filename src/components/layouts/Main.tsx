import React from 'react';
import 'assets/scss/index.scss';

import { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

// import { graphql, useStaticQuery } from 'gatsby';

import { ErrorBoundary } from './ErrorBoundary';
import { Loader } from './Loader';
import { Header } from './Header';
import { Footer } from './Footer';

interface MainPropsI {
  children: ReactNode;
}

export function Main({ children }: MainPropsI) {
  interface LinkI {
    url: string;
    label: string;
  }

  interface ContactI {
    url: string;
    label: string;
    imgUrl: string;
    imgAlt: string;
  }

  interface DATAI {
    url: string;
    title: string;
    description: string;
    keywords: string;
    ogImageUrl: string;
    logo: {
      url: string;
      alt: string;
    };
    links: LinkI[];
    img: {
      url: string;
      alt: string;
    };
    contacts: ContactI[];
    copyright: string;
  }

  const DATA: DATAI = {
    title: 'Vladis Mobil Grooming & Spa',
    description:
      "Experience the best in mobile dog grooming. Our expert groomers bring stress-free, personalized care to your doorstep, ensuring your pup's happiness and well-being. Book your appointment today!",
    keywords:
      'Dog grooming in Pennsylvania, Dog grooming in PA, Dog grooming in New Jersey, Dog grooming in NJ, Dog grooming in Delaware, Dog grooming in DE, Dog grooming in New York, Dog grooming in NY, Mobile dog grooming PA, Mobile dog grooming NJ, Mobile dog grooming DE, Mobile dog grooming NY, Professional dog grooming, Affordable dog grooming, Best dog groomer near me, Dog grooming services, Dog grooming packages, Pet grooming services, Dog spa services, Dog nail trimming, Dog bathing services, Dog fur trimming, Dog ear cleaning, Dog teeth cleaning, Dog grooming for small breeds, Dog grooming for large breeds, Poodle grooming services, Labrador grooming services, Shih Tzu grooming services, Golden Retriever grooming services, German Shepherd grooming services, Mobile dog grooming, Home dog grooming, Dog grooming for anxious dogs, Dog grooming for puppies, Senior dog grooming services, Organic dog grooming products, Eco-friendly dog grooming, Top-rated dog groomer, Experienced dog groomer, Local dog grooming, Dog grooming reviews, Dog grooming appointments, Dog grooming deals, Dog grooming promotions, Professional dog grooming in PA, Affordable dog grooming in NJ, Mobile dog grooming in DE, Best dog groomer in NY, Dog grooming services PA NJ DE NY, Dog spa services in Pennsylvania, Dog nail trimming in New Jersey, Pet grooming services in Delaware, Dog bathing in New York',
    url: 'vladis-grooming.com',
    ogImageUrl:
      'https://raw.githubusercontent.com/Leon740/vladis-mobil-grooming-frontend/main/src/assets/images/general/ogImage.jpg',
    logo: {
      url: 'https://raw.githubusercontent.com/Leon740/vladis-mobil-grooming-frontend/main/src/assets/images/general/logo.svg',
      alt: 'Vladis Mobil Grooming & Spa in PA, NJ, DE, NY'
    },
    links: [
      {
        label: 'Our Services',
        url: '/our-services/'
      },
      {
        label: 'Before the Session',
        url: '/before-the-session/'
      },
      {
        label: 'Reviews',
        url: '/reviews/'
      },
      {
        label: 'FAQs',
        url: '/faqs/'
      },
      {
        label: 'Contact Us',
        url: '/contact-us/'
      },
      {
        label: 'Book Now',
        url: '/book-now/'
      }
    ],
    img: {
      url: 'https://raw.githubusercontent.com/Leon740/vladis-mobil-grooming-frontend/main/src/assets/images/general/footer.png',
      alt: 'Vladis Mobil Grooming & Spa in PA, NJ, DE, NY'
    },
    contacts: [
      {
        imgUrl:
          'https://raw.githubusercontent.com/Leon740/vladis-mobil-grooming-frontend/main/src/assets/images/contacts/contacts_phone.svg',
        imgAlt: 'Vladis Mobil Grooming & Spa Phone',
        url: 'tel:2679771310',
        label: '267-977-1310'
      },
      {
        imgUrl:
          'https://raw.githubusercontent.com/Leon740/vladis-mobil-grooming-frontend/main/src/assets/images/contacts/contacts_email.svg',
        imgAlt: 'Vladis Mobil Grooming & Spa Email',
        url: 'mailto:vladis.mobile.grooming.spa@gmail.com',
        label: 'vladis.mobile.grooming.spa@gmail.com'
      },
      {
        imgUrl:
          'https://raw.githubusercontent.com/Leon740/vladis-mobil-grooming-frontend/main/src/assets/images/contacts/contacts_instagram.svg',
        imgAlt: 'Vladis Mobil Grooming & Spa Instagram',
        url: 'instagram.com',
        label: 'vladis.mobile.grooming.spa'
      },
      {
        imgUrl:
          'https://raw.githubusercontent.com/Leon740/vladis-mobil-grooming-frontend/main/src/assets/images/contacts/contacts_facebook.svg',
        imgAlt: 'Vladis Mobil Grooming & Spa Facebook',
        url: 'facebook.com',
        label: 'vladis.mobile.grooming.spa'
      }
    ],
    copyright: 'Vladis Mobile Grooming & Spa. All Rights Reserved.'
  };

  // const query = graphql`
  //   query {
  //     strapiMain {
  //       url
  //       title
  //       description
  //       keywords
  //       ogImageUrl
  //       logo {
  //         url
  //         alt
  //       }
  //       links {
  //         url
  //         label
  //       }
  //       img {
  //         url
  //         alt
  //       }
  //       contacts {
  //         url
  //         label
  //         imgUrl
  //         imgAlt
  //       }
  //       copyright
  //     }
  //   }
  // `;

  // const DATA: DATAI = useStaticQuery(query).strapiMain;

  return (
    <ErrorBoundary>
      <Loader logo={DATA.logo}>
        <Helmet>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>{DATA.title}</title>
          <meta name="description" content={DATA.description} />
          <meta name="keywords" content={DATA.keywords} />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href={DATA.url} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={DATA.title} />
          <meta property="og:description" content={DATA.description} />
          <meta property="og:image" content={DATA.ogImageUrl} />
          <meta property="og:url" content={DATA.url} />
        </Helmet>
        <Header data={{ logo: DATA.logo, links: DATA.links }} />
        {children}
        <Footer
          data={{
            img: DATA.img,
            contacts: DATA.contacts,
            copyright: DATA.copyright
          }}
        />
      </Loader>
    </ErrorBoundary>
  );
}
