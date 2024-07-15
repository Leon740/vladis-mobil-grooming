import React from 'react';
import ReactMarkdown from 'react-markdown';
import { IconImg } from './IconImg';

interface SectionHeaderPropsI {
  icon?: string;
  as?: 'h1' | 'h2';
  title: string;
  paragraph?: string;
}

export function SectionHeader({ icon, as = 'h2', title, paragraph }: SectionHeaderPropsI) {
  const Tag = as;

  return (
    <div className="section-inner-gap">
      {icon && <IconImg icon={icon} iconClassName="text-128 text-sky-500" />}

      <section className="flex flex-col gap-16">
        <Tag
          // tracking-3
          className="text-cali-48"
          dangerouslySetInnerHTML={{
            __html: title
          }}
        />

        {paragraph && (
          <div className="text-ss3-20-regular">
            <ReactMarkdown>{paragraph}</ReactMarkdown>
          </div>
        )}
      </section>
    </div>
  );
}
