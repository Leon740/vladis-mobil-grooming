import React from 'react';

import { Img } from './Img';
import { Icon } from './Icon';

interface IconImgPropsI {
  icon?: string;
  iconClassName?: string;
  src?: string;
  alt?: string;
  imgClassName?: string;
}

export function IconImg({ icon, iconClassName, src, alt, imgClassName = '' }: IconImgPropsI) {
  return icon ? (
    <Icon icon={icon} className={iconClassName} />
  ) : (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Img src={src} alt={alt} className={imgClassName} />
  );
}
