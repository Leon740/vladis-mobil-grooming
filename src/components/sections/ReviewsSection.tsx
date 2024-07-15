import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import { Img } from 'components/general/Img';
import { SectionHeader } from 'components/general/SectionHeader';

import ImgStars from 'assets/images/reviews/reviews_stars.svg';
import ImgYelp from 'assets/images/reviews/reviews_yelp.svg';
import ImgGoogle from 'assets/images/reviews/reviews_google.svg';

export function ReviewsSection() {
  interface ReviewI {
    yelp: boolean;
    imgUrl: string;
    imgAlt: string;
    title: string;
    paragraph: string;
    author: string;
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
    reviews: ReviewI[];
  }

  // const DATA_0: DATAI = {
  //   header: {
  //     icon: 'icon-sections_reviews',
  //     title: 'Hundreds of <b>wagging</b> tails!',
  //     paragraph: {
  //       data: {
  //         paragraph: ''
  //       }
  //     }
  //   },
  //   reviews: [
  //     {
  //       yelp: true,
  //       imgUrl: 'https://raw.githubusercontent.com/Leon740/vladis-mobil-grooming-frontend/main/src/assets/images/reviews/reviews_1.jpg',
  //       imgAlt: 'Vladis Mobile Grooming & Spa in PA, NJ, DE, NY',
  //       title: "Her haircut is always so so cute and lasts a long time! Can't beat it.",
  //       paragraph:
  //         'If you are looking for a great pet groomer who is gentle, pays attention to detail, and convenient, set up your appointment with Vladis.',
  //       author: 'Mandy B.'
  //     },
  //     {
  //       yelp: false,
  //       imgUrl: 'https://raw.githubusercontent.com/Leon740/vladis-mobil-grooming-frontend/main/src/assets/images/reviews/reviews_2.jpg',
  //       imgAlt: 'Vladis Mobile Grooming & Spa in PA, NJ, DE, NY',
  //       title:
  //         "Amazing! I've had other dog groomers before, but they never left my dog feeling CLEAN.",
  //       paragraph:
  //         'My dog looks, feels, and smells clean. She cleaned his ears, trimmed his nails! And he got a cute little bandana after too. I would definitely recommend them to anyone looking for a dog groomer, reasonable pricing, great customer service!',
  //       author: 'Rosario R.'
  //     },
  //     {
  //       yelp: false,
  //       imgUrl: 'https://raw.githubusercontent.com/Leon740/vladis-mobil-grooming-frontend/main/src/assets/images/reviews/reviews_3.jpg',
  //       imgAlt: 'Vladis Mobile Grooming & Spa in PA, NJ, DE, NY',
  //       title: 'She came out looking and feeling good.',
  //       paragraph:
  //         'This is Nova’s second grooming appointment with Vladis. He was right on time, Nova had a great experience today.',
  //       author: 'Yoga N.'
  //     },
  //     {
  //       yelp: false,
  //       imgUrl: 'https://raw.githubusercontent.com/Leon740/vladis-mobil-grooming-frontend/main/src/assets/images/reviews/reviews_4.jpg',
  //       imgAlt: 'Vladis Mobile Grooming & Spa in PA, NJ, DE, NY',
  //       title: 'I can finally see his smile',
  //       paragraph:
  //         'Great job cleaning up all of his doodle long hair. not only does he look thinner, but he looks happier!!',
  //       author: 'Lorin S.'
  //     },
  //     {
  //       yelp: false,
  //       imgUrl: 'https://raw.githubusercontent.com/Leon740/vladis-mobil-grooming-frontend/main/src/assets/images/reviews/reviews_5.jpg',
  //       imgAlt: 'Vladis Mobile Grooming & Spa in PA, NJ, DE, NY',
  //       title: 'He always comes back looking great!',
  //       paragraph:
  //         "We've been using Vladis for grooming our 1.5yo labradoodle and been very pleased with the service.",
  //       author: 'Marcy H.'
  //     },
  //     {
  //       yelp: true,
  //       imgUrl: 'https://raw.githubusercontent.com/Leon740/vladis-mobil-grooming-frontend/main/src/assets/images/reviews/reviews_6.jpg',
  //       imgAlt: 'Vladis Mobile Grooming & Spa in PA, NJ, DE, NY',
  //       title: 'I love what my dog looks like!!!',
  //       paragraph:
  //         'Vladis knew exactly what to do this time because my dog actually needed more hair cut off, and Charlie did a terrific job!',
  //       author: 'L. Schneid'
  //     },
  //     {
  //       yelp: true,
  //       imgUrl: 'https://raw.githubusercontent.com/Leon740/vladis-mobil-grooming-frontend/main/src/assets/images/reviews/reviews_7.jpg',
  //       imgAlt: 'Vladis Mobile Grooming & Spa in PA, NJ, DE, NY',
  //       title: 'His cut is so cute!',
  //       paragraph:
  //         'Booking was very easy and the team at Vladis was very flexible with our grooming dates moving around. The groomer was super sweet and gentle with our little guy.',
  //       author: 'Diana'
  //     },
  //     {
  //       yelp: false,
  //       imgUrl: 'https://raw.githubusercontent.com/Leon740/vladis-mobil-grooming-frontend/main/src/assets/images/reviews/reviews_8.jpg',
  //       imgAlt: 'Vladis Mobile Grooming & Spa in PA, NJ, DE, NY',
  //       title: 'Great work and highly recommended!',
  //       paragraph:
  //         'Thank you - An exceptional grooming job and I believe this is your best work ever! I am so grateful to you and the Vladis team! Stella is feeling awesome; energetic and perky and happy - and loved getting her teeth brushed too!',
  //       author: 'Alli W.'
  //     },
  //     {
  //       yelp: false,
  //       imgUrl: 'https://raw.githubusercontent.com/Leon740/vladis-mobil-grooming-frontend/main/src/assets/images/reviews/reviews_9.jpg',
  //       imgAlt: 'Vladis Mobile Grooming & Spa in PA, NJ, DE, NY',
  //       title:
  //         'I would definitely recommend anyone who needs a groomer at the convenience of staying at home.',
  //       paragraph:
  //         'Vladis Mobile Dog Groomers was easy to book, very responsive, and best of all they did an amazing job with our Border Collie. Groomer Erika was just the sweetest and our dog just fell in love with her upon meeting her.',
  //       author: 'Nadia C.'
  //     }
  //   ]
  // };

  const query = graphql`
    query {
      strapiReviewsSection {
        header {
          icon
          title
          paragraph {
            data {
              paragraph
            }
          }
        }
        reviews {
          imgUrl
          imgAlt
          yelp
          title
          paragraph
          author
        }
      }
    }
  `;

  const DATA: DATAI = useStaticQuery(query).strapiReviewsSection;

  return (
    <div className="section-gap">
      <div className="section-inner-gap">
        <div className="container">
          <SectionHeader
            icon={DATA.header.icon}
            title={DATA.header.title}
            paragraph={DATA.header.paragraph.data.paragraph}
          />
        </div>

        <div className="overflow-auto">
          <div className="px-32 lg:container">
            <ul className="flex flex-row gap-32 lg:block lg:columns-3">
              {DATA.reviews.map(
                ({ yelp, title, paragraph, author, imgUrl, imgAlt }: ReviewI, reviewIndex) => (
                  <li
                    key={`review_${reviewIndex}`}
                    className="bg-white flex flex-col w-[384px] lg:w-auto lg:mt-32 lg:first-of-type:mt-0 flex-shrink-0 rounded-16 overflow-hidden"
                  >
                    <Img src={imgUrl} alt={imgAlt} className="" />
                    <div className="flex flex-col justify-between gap-16 p-32 h-full">
                      <section
                        aria-labelledby={`review_title_${reviewIndex}`}
                        className="flex flex-col gap-16"
                      >
                        <div className="flex flex-row gap-16 items-center">
                          <Img
                            src={yelp ? ImgYelp : ImgGoogle}
                            alt="Vladis Mobile Grooming & Spa 5 Stars Rating"
                            className="w-32"
                          />
                          <Img
                            src={ImgStars}
                            alt="Vladis Mobile Grooming & Spa 5 Stars Rating"
                            className="w-128"
                          />
                        </div>
                        <h4 id={`review_title_${reviewIndex}`} className="text-ss3-20-bold">
                          &quot;{title}&quot;
                        </h4>
                        <p className="text-ss3-20-regular">{paragraph}</p>
                      </section>
                      <span className="text-cali-16">- {author}</span>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
