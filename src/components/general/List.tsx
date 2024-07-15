import React from 'react';

import { IconImg } from './IconImg';
import ReactMarkdown from 'react-markdown';

interface ListItemI {
  icon: string;
  title: string;
  paragraph:
    | string
    | {
        data: {
          paragraph: string;
        };
      };
}

interface ListPropsI {
  name: string;
  list: ListItemI[];
}

export function List({ name, list }: ListPropsI) {
  return (
    <ul className="flex flex-col gap-32">
      {list.map(({ icon, title, paragraph }: ListItemI, index) => {
        return (
          <li key={`${name}_${index}`} className="flex flex-col gap-16 p-32 rounded-16 bg-white">
            <IconImg icon={icon} iconClassName="text-64 text-sky-500" />
            <h3 className="font-ss3-bold text-20">{title}</h3>
            <div className="font-ss3-regular text-20">
              <ReactMarkdown>
                {typeof paragraph === 'string' ? paragraph : paragraph.data.paragraph}
              </ReactMarkdown>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
