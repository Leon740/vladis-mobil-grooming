import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import { useState } from 'react';
import { SectionHeader } from 'components/general/SectionHeader';
import { List } from 'components/general/List';
import { IconImg } from 'components/general/IconImg';
import { Button } from 'components/general/Button';

interface ServicesSectionPropsI {
  displayAllServices?: boolean;
}

export function ServicesSection({ displayAllServices = false }: ServicesSectionPropsI) {
  interface PackageI {
    name: string;
    title: string;
    paragraph: string;
  }

  interface ServiceI {
    icon: string;
    title: string;
    paragraph: {
      data: {
        paragraph: string;
      };
    };
    disabled?: 0 | 1 | 2;
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
    packages: PackageI[];
    services: ServiceI[];
    buttonLabel: string;
  }

  // const DATA_0: DATAI = {
  //   header: {
  //     icon: 'icon-sections_services',
  //     title: 'Grooming made <b>simple</b> <br /> for you and your dog',
  //     paragraph: {
  //       data: {
  //         paragraph: ''
  //       }
  //     }
  //   },
  //   packages: [
  //     {
  //       name: 'Package 1',
  //       title: 'Full Groom',
  //       paragraph:
  //         'This package is perfect for our long-haired pals! It includes all the basics, plus a thorough, full-body and face haircut.'
  //     },
  //     {
  //       name: 'Package 2',
  //       title: 'Bath & Brush',
  //       paragraph:
  //         "This package is perfect for short-haired breeds not in need of a haircut. It's also a speedy solution for any breed just needing a refreshing bath."
  //     }
  //   ],
  //   services: [
  //     {
  //       icon: 'icon-services_bath',
  //       title: 'Bath',
  //       paragraph: {
  //         data: {
  //           paragraph:
  //             "Our vans are loaded with fresh, warm water because baths are crucial to the grooming process. We use premium shampoos and conditioners tailored to your dog’s needs but if you have a prescribed medicated shampoo, we're happy to use that too (a small additional fee applies)."
  //         }
  //       }
  //     },
  //     {
  //       icon: 'icon-services_blowout',
  //       title: 'Blow Out',
  //       paragraph: {
  //         data: {
  //           paragraph:
  //             "There are no cages onboard our vans. We hand-dry your pup from nose to tail. This process not only sheds excess fur but also preps those thick, furry coats for haircuts. Plus, it's a perfect time for your groomer to inspect your dog’s skin and coat for issues not readily visible."
  //         }
  //       }
  //     },
  //     {
  //       icon: 'icon-services_haircut',
  //       title: 'Haircut',
  //       paragraph: {
  //         data: {
  //           paragraph:
  //             "Every pup has their own style. Whether it's a neat summer shave or just a little off the top, your groomer will consult with you to match your requests while honoring your pet’s health and safety."
  //         }
  //       },
  //       disabled: 2
  //     },
  //     {
  //       icon: 'icon-services_brush',
  //       title: 'Brush',
  //       paragraph: {
  //         data: {
  //           paragraph:
  //             'Your groomer is equipped with the highest quality brushes, combs, and tools that suit your dog’s needs and ensures their fur ends up feeling as good as it looks.'
  //         }
  //       }
  //     },
  //     {
  //       icon: 'icon-services_ears',
  //       title: 'Ears',
  //       paragraph: {
  //         data: {
  //           paragraph:
  //             "We only use top-tier, vet-approved ear cleaners for your pup. We’ll pluck those floppy (or pointy) ears upon request (additional fee applies) and if we spot any irritation or infection, we'll let you know."
  //         }
  //       }
  //     },
  //     {
  //       icon: 'icon-services_nails',
  //       title: 'Nails',
  //       paragraph: {
  //         data: {
  //           paragraph:
  //             "Maintaining the right nail length is crucial for your pup's health and well-being. We include nail dremeling (filing) in our service, but if your dog isn't a fan, we'll switch to clipping."
  //         }
  //       }
  //     },
  //     {
  //       icon: 'icon-services_teeth',
  //       title: 'Teeth',
  //       paragraph: {
  //         data: {
  //           paragraph:
  //             'We use vet-approved toothpaste and soft bristle toothbrushes to boost your pup’s oral health and freshen their breath. Your groomer will report any signs of poor dental health so you can address it.'
  //         }
  //       }
  //     },
  //     {
  //       icon: 'icon-services_anal',
  //       title: 'Anal Glands',
  //       paragraph: {
  //         data: {
  //           paragraph:
  //             "Some dogs need more care in this department. Upon request, we'll provide this service at no extra charge. Unsure if it’s necessary? Your groomer will be there to advise, or you can consult your vet."
  //         }
  //       }
  //     }
  //   ],
  //   buttonLabel: 'Learn more about our Services'
  // };

  const query = graphql`
    query {
      strapiServicesSection {
        header {
          icon
          title
          paragraph {
            data {
              paragraph
            }
          }
        }
        packages {
          name
          title
          paragraph
        }
        services {
          icon
          title
          paragraph {
            data {
              paragraph
            }
          }
          disabled
        }
        buttonLabel
      }
    }
  `;

  const DATA: DATAI = useStaticQuery(query).strapiServicesSection;

  const [isDisplayAllServices, setIsDisplayAllServices] = useState(displayAllServices);

  return (
    <div className="section-gap">
      <div className="container">
        <div className="section-inner-gap">
          <SectionHeader
            icon={DATA.header.icon}
            title={DATA.header.title}
            paragraph={DATA.header.paragraph.data.paragraph}
          />

          <ul className="flex flex-col gap-32">
            {DATA.packages.map(({ name, title, paragraph }: PackageI, packageIndex) => {
              const isEven = packageIndex % 2 === 0;

              return (
                <li
                  key={`package_${packageIndex}`}
                  className={`flex flex-col gap-32 p-32 rounded-16 ${
                    isEven ? 'bg-sky-500' : 'bg-white'
                  }`}
                >
                  <span
                    className={`font-ss3-bold text-16 max-w-max py-4 px-16 rounded-16 bg-sky-500 ${
                      isEven ? 'bg-white text-sky-500' : 'bg-sky-500 text-white'
                    }`}
                  >
                    {name}
                  </span>
                  <h3 className="font-calistoga-regular text-24">{title}</h3>
                  <p className="text-ss3-20-regular">{paragraph}</p>
                  <ul className="flex flex-col gap-32 xl:flex-row">
                    {DATA.services.map(({ icon, title, disabled }, serviceIndex) => (
                      <li
                        key={`service_${serviceIndex}`}
                        className="flex flex-row gap-16 items-center"
                      >
                        <IconImg
                          icon={icon}
                          iconClassName={`text-32 text-black ${
                            isEven ? 'text-white' : 'text-sky-500'
                          } ${disabled === packageIndex + 1 ? 'text-slate-400' : ''}`}
                        />
                        <span
                          className={`text-ss3-20-regular ${
                            disabled === packageIndex + 1 ? 'text-slate-400 line-through' : ''
                          }`}
                        >
                          {title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>

          {!isDisplayAllServices && (
            <Button
              type="Secondary_White"
              onClick={() => setIsDisplayAllServices(true)}
              label={DATA.buttonLabel}
              icon="icon-general_arrow"
            />
          )}

          {displayAllServices && (
            <h2 className="text-cali-48 mt-64">
              Learn more about our <span className="text-sky-500">Services</span>
            </h2>
          )}

          {isDisplayAllServices && <List name="Services" list={DATA.services} />}
        </div>
      </div>
    </div>
  );
}
