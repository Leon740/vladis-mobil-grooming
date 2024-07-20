import React from 'react';
import ReactMarkdown from 'react-markdown';

interface ParagraphPropsI {
  paragraph:
    | string
    | {
        data: {
          paragraph: string;
        };
      };
}

export function Paragraph({ paragraph }: ParagraphPropsI) {
  return (
    <ReactMarkdown>
      {typeof paragraph === 'string' ? paragraph : paragraph.data.paragraph}
    </ReactMarkdown>
  );
}
