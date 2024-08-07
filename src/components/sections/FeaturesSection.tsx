import React from 'react';

// import { graphql, useStaticQuery } from 'gatsby';

import { SectionHeader } from 'components/general/SectionHeader';
import { List } from 'components/general/List';

export function FeaturesSection() {
  interface FeatureI {
    icon: string;
    title: string;
    paragraph: {
      data: {
        paragraph: string;
      };
    };
  }

  interface DATAI {
    header: {
      icon: string;
      title: string;
      paragraph: {
        data: {
          paragraph: string;
        };
      };
    };
    list: FeatureI[];
  }

  const DATA: DATAI = {
    header: {
      icon: 'icon-sections_features',
      title: 'Unleashing a new era of dog <b>grooming</b>',
      paragraph: {
        data: {
          paragraph: ''
        }
      }
    },
    list: [
      {
        icon: 'icon-features_stress',
        title: 'Stress-Free',
        paragraph: {
          data: {
            paragraph:
              'Our calm, private grooming space is tailored for your dog’s undivided attention. Ideal for anxious pups.'
          }
        }
      },
      {
        icon: 'icon-features_quality',
        title: 'High Quality',
        paragraph: {
          data: {
            paragraph:
              'Top-tier shampoos, vet-rated cleaning solutions, breed-specific brushes, and unmatched expertise.'
          }
        }
      },
      {
        icon: 'icon-features_convenient',
        title: 'Convenient',
        paragraph: {
          data: {
            paragraph:
              "Forget the 4-hour trips to the groomer. We're at your doorstep on your schedule."
          }
        }
      }
    ]
  };

  // const query = graphql`
  //   query {
  //     strapiFeaturesSection {
  //       header {
  //         icon
  //         title
  //         paragraph {
  //           data {
  //             paragraph
  //           }
  //         }
  //       }
  //       list {
  //         icon
  //         title
  //         paragraph {
  //           data {
  //             paragraph
  //           }
  //         }
  //       }
  //     }
  //   }
  // `;

  // const DATA: DATAI = useStaticQuery(query).strapiFeaturesSection;

  return (
    <div className="container">
      <div className="section-inner-gap">
        <SectionHeader
          icon={DATA.header.icon}
          title={DATA.header.title}
          paragraph={DATA.header.paragraph.data.paragraph}
        />
        <List name="Features" list={DATA.list} />
      </div>
    </div>
  );
}
