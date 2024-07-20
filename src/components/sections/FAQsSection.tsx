import React from 'react';
import { useState } from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import { SectionHeader } from 'components/general/SectionHeader';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody
} from 'components/pure/Accordion';
import { Icon } from 'components/general/Icon';
import { Button } from 'components/general/Button';
import { Paragraph } from 'components/general/Paragraph';

interface FAQsSectionPropsI {
  displayAllFaqs?: boolean;
}

export function FAQsSection({ displayAllFaqs = false }: FAQsSectionPropsI) {
  interface FAQI {
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
    faq: FAQI[];
    buttonLabel: string;
  }

  // const DATA_0: DATAI = {
  //   header: {
  //     icon: 'icon-sections_faqs',
  //     title: '<b>F</b>requently <b>A</b>sked <b>Q</b>uestions',
  //     paragraph: {
  //       data: {
  //         paragraph:
  //           'We want to make sure all of your questions are answered. Not finding your answers here? Please Contact Us.'
  //       }
  //     }
  //   },
  //   faq: [
  //     {
  //       title: 'What is included in dog grooming?',
  //       paragraph: {
  //         data: {
  //           paragraph:
  //             "Dog grooming is so much more than giving your dog a bath. Dog grooming is a broad term that covers all aspects of canine cleanliness and hygiene. The services included in dog grooming will vary based on the grooming package you choose for your pup. Also, some dogs like goldendoodles, shepherds, and shih tzus have thick coats that can get matted and tangled without regular care. These breeds sometimes require additional dematting services if the matting is moderate to severe. We offer our services in the form of a Full Groom package or a Bath & Brush package. A Full Groom comes with a soothing bath and blow out, a stylish haircut, thorough brushing, and meticulous care for nails, teeth, ears, and anal glands. It's the ultimate spa day your pup deserves. A Bath & Brush Includes a thorough brush to detangle and shine, rejuvenating bath and blow out, a nail trim, and a teeth cleaning. Perfect for keeping your dog looking and feeling their best in between full groom sessions."
  //         }
  //       }
  //     },
  //     {
  //       title: 'How can I make a reservation?',
  //       paragraph: {
  //         data: {
  //           paragraph:
  //             'Use the “Book Now” button on top and fill out the form. We will coordinate details and scheduling with you.'
  //         }
  //       }
  //     },
  //     {
  //       title: 'What services do you offer?',
  //       paragraph: {
  //         data: {
  //           paragraph:
  //             'We provide a full grooming experience, complete with bathing using the highest end care products, careful haircutting with scissors and clippers, nail trimming, ear cleaning and anal gland expression (upon request) and full teeth brushing. Specific services (eg, de-skunking) can be accommodated upon request. See our services.'
  //         }
  //       }
  //     },
  //     {
  //       title: 'What should I expect with the grooming appointment?',
  //       paragraph: {
  //         data: {
  //           paragraph:
  //             "We will confirm our arrival time the day of the appointment and then call you when we’re outside - just let us know if you have any special requests (eg, park the van on the side of the apartment building, and we can meet you at your door or you can bring your dog outside. A typical grooming appointment should take anywhere between 1 to 2 hours depending on your dog's size and breed."
  //         }
  //       }
  //     },
  //     {
  //       title: 'Do you offer urgent or rush appointments?',
  //       paragraph: {
  //         data: {
  //           paragraph:
  //             "We know life doesn't always go according to plan, so message us and we will do our best to accommodate your schedule."
  //         }
  //       }
  //     },
  //     {
  //       title: 'How long will the groom take?',
  //       paragraph: {
  //         data: {
  //           paragraph:
  //             "A typical grooming appointment should take anywhere between 1 to 2 hours depending on your dog's size and breed. If your dog has never been groomed before, or there are issues (i.e. matting), then it can take longer. After our first grooming sessions, it is usually quicker going forward. The more we know about your dog, the better."
  //         }
  //       }
  //     },
  //     {
  //       title: 'Do I need to be home during the grooming session?',
  //       paragraph: {
  //         data: {
  //           paragraph:
  //             "Yes. At least when we first arrive and if it's your dogs first groom. If you have to run a quick errand, that is no problem at all. However, we do ask you or someone is able to take your dog back once we are done. We will never leave a dog unattended."
  //         }
  //       }
  //     }
  //   ],
  //   buttonLabel: 'See all Questions'
  // };

  const query = graphql`
    query {
      strapiFaqsSection {
        header {
          icon
          title
          paragraph {
            data {
              paragraph
            }
          }
        }
        faq {
          title
          paragraph {
            data {
              paragraph
            }
          }
        }
        buttonLabel
      }
    }
  `;

  const DATA: DATAI = useStaticQuery(query).strapiFaqsSection;

  const [isDisplayAllFaqs, setIsDisplayAllFaqs] = useState(displayAllFaqs);

  const getAllFaqsFn = () =>
    isDisplayAllFaqs ? DATA.faq : DATA.faq.length > 7 ? DATA.faq.slice(7) : DATA.faq;

  return (
    <div className="section-gap">
      <div className="container">
        <div className="section-inner-gap">
          <SectionHeader
            icon={DATA.header.icon}
            title={DATA.header.title}
            paragraph={DATA.header.paragraph.data.paragraph}
          />

          <Accordion>
            <ul className="flex flex-col gap-32">
              {getAllFaqsFn().map(({ title, paragraph }: FAQI, faqIndex) => (
                <AccordionItem
                  key={`faq_${faqIndex}`}
                  id={faqIndex}
                  render={(isActive) => (
                    <div className="rounded-16 bg-white">
                      <AccordionHeader>
                        <div
                          className={`p-32 w-full flex flex-row items-center justify-between transition-all hover:text-sky-500 ${
                            isActive ? 'text-sky-500' : ''
                          }`}
                        >
                          <span className="text-ss3-20-bold text-left transition-all">{title}</span>
                          <Icon
                            icon="icon-general_arrow"
                            className={`text-20 transition-all ${
                              isActive ? '-rotate-90' : 'rotate-90'
                            }`}
                          />
                        </div>
                      </AccordionHeader>
                      <AccordionBody>
                        <div className="p-32 pt-0 text-ss3-20-regular">
                          <Paragraph paragraph={paragraph} />
                        </div>
                      </AccordionBody>
                    </div>
                  )}
                />
              ))}
            </ul>
          </Accordion>

          {!isDisplayAllFaqs && (
            <Button
              type="Secondary_White"
              onClick={() => setIsDisplayAllFaqs(true)}
              label={DATA.buttonLabel}
              icon="icon-general_arrow"
            />
          )}
        </div>
      </div>
    </div>
  );
}
