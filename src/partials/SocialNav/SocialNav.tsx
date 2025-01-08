import DATA from './socialNavData.json';
import { Link } from '@components/global/Link';
import { Img } from '@components/global/Img';

export function SocialNav() {
  return (
    <ul className="flex flex-col gap-32 lg:flex-row">
      {DATA.links.map(({ label, href, img: { src, alt } }, index) => (
        <li key={`${label}_${index}`} className="w-full lg:w-1/4">
          <Link
            href={href}
            isExternal
            className="max-w-max flex flex-row items-center gap-8 hover:text-sky-500"
          >
            <Img src={src} alt={alt} width={24} height={24} />
            <span className="text-ss3-16-regular overflow-hidden text-ellipsis">{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
