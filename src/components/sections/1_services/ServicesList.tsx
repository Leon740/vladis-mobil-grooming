import { useState } from 'preact/hooks';
import { ButtonPaw } from '@components/global/Button';
import { List, type IListItem } from '@components/global/List';

interface IServicesList {
  button: {
    label: string;
    icon: string;
  };
  displayAllServices?: boolean;
  services: IListItem[];
}

export function ServicesList({
  button: { label, icon },
  displayAllServices = false,
  services
}: IServicesList) {
  const [isDisplayed, setIsDisplayed] = useState(displayAllServices);

  return isDisplayed ? (
    <section className="section-gap-64">
      <h2 className="text-cali-48 mt-64">
        Learn more about our <span className="text-sky-500">Services</span>
      </h2>
      <List name="Services" list={services} />
    </section>
  ) : (
    <ButtonPaw
      buttonType="button"
      style="Secondary_White"
      label={label}
      icon={icon}
      handleClick={() => setIsDisplayed(true)}
    />
  );
}
