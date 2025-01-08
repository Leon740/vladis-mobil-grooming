interface IImgProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  isLazy?: boolean;
  className?: string;
}

export function Img({ src, alt, width, height, isLazy = true, className = '' }: IImgProps) {
  const imgSrc = `/images/${src}`;

  return (
    <img
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      loading={isLazy ? 'lazy' : 'eager'}
      className={className}
    />
  );
}
