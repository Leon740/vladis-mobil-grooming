import React from 'react';
import { Img } from 'components/general/Img';

interface ContactI {
  imgUrl: string;
  imgAlt: string;
  url: string;
  label: string;
}

interface FooterPropsI {
  data: {
    img: {
      url: string;
      alt: string;
    };
    contacts: ContactI[];
    copyright: string;
  };
}

export function Footer({ data }: FooterPropsI) {
  const { img, contacts, copyright } = data;
  const date = new Date();

  return (
    <div className="pt-64 xl:pt-128">
      <Img src={img.url} alt={img.alt} className="max-w-max mx-auto" />

      <div className="bg-white">
        <div className="py-32">
          <div className="container">
            <ul className="flex flex-col justify-between gap-24 lg:flex-row lg:gap-32">
              {contacts.map(({ url, imgUrl, imgAlt, label }: ContactI, contactIndex) => (
                <li key={`contact_${contactIndex}`}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ss3-16-regular flex items-center gap-16 hover:text-sky-500"
                  >
                    <img src={imgUrl} alt={imgAlt} className="w-24" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container">
          <p className="text-ss3-16-regular text-center">
            &copy; Copyright {date.getFullYear()} {copyright}
          </p>
        </div>
      </div>
    </div>
  );
}
