import { Icon } from './Icon';

export interface IListItem {
  icon: string;
  title: string;
  paragraph: string;
}

interface IListProps {
  name: string;
  list: IListItem[];
}

export function List({ name, list }: IListProps) {
  return (
    <ul className="flex flex-col gap-32">
      {list.map(({ icon, title, paragraph }: IListItem, index) => {
        return (
          <li key={`${name}_${index}`} className="flex flex-col gap-16 p-32 rounded-16 bg-white">
            <Icon icon={icon} className="text-64 text-sky-500" />
            <h3 className="text-ss3-20-bold">{title}</h3>
            <p className="text-ss3-20-regular">{paragraph}</p>
          </li>
        );
      })}
    </ul>
  );
}
