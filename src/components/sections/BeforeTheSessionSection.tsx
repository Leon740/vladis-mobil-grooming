import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import { SectionHeader } from 'components/general/SectionHeader';
import { List } from 'components/general/List';

export function BeforeTheSessionSection() {
  interface SessionI {
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
    list: SessionI[];
  }

  // const DATA_0: DATAI = {
  //   header: {
  //     icon: 'icon-sections_beforethesession',
  //     title: 'Before the <b>Session</b>',
  //     paragraph: {
  //       data: {
  //         paragraph: 'Have any questions or concerns? Feel free to ask.'
  //       }
  //     }
  //   },
  //   list: [
  //     {
  //       icon: 'icon-beforethesession_parking',
  //       title: 'Parking Matters',
  //       paragraph: {
  //         data: {
  //           paragraph: 'Our vans are 8 ft by 19.5 ft and love a flat space.'
  //         }
  //       }
  //     },
  //     {
  //       icon: 'icon-beforethesession_communication',
  //       title: 'Over Communication is Key',
  //       paragraph: {
  //         data: {
  //           paragraph:
  //             'Share any special requirements, health, and behavioral details with your grooming professional.'
  //         }
  //       }
  //     },
  //     {
  //       icon: 'icon-beforethesession_cancel',
  //       title: 'Cancel with Care',
  //       paragraph: {
  //         data: {
  //           paragraph: 'Please provide a 24-hour notice if plans change.'
  //         }
  //       }
  //     }
  //   ]
  // };

  const query = graphql`
    query {
      strapiBeforeTheSessionSection {
        header {
          icon
          title
          paragraph {
            data {
              paragraph
            }
          }
        }
        list {
          icon
          title
          paragraph {
            data {
              paragraph
            }
          }
        }
      }
    }
  `;

  const DATA: DATAI = useStaticQuery(query).strapiBeforeTheSessionSection;

  return (
    <div className="section-gap">
      <div className="container">
        <div className="section-inner-gap">
          <SectionHeader
            icon={DATA.header.icon}
            title={DATA.header.title}
            paragraph={DATA.header.paragraph.data.paragraph}
          />
          <List name="BeforeTheSession" list={DATA.list} />
        </div>
      </div>
    </div>
  );
}
