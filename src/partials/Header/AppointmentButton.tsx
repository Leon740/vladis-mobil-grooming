import { Button } from '@components/global/Button';

interface IAppointmentButtonProps {
  href: string;
  label: string;
  icon: string;
}
export function AppointmentButton({ href, label, icon }: IAppointmentButtonProps) {
  return (
    <Button href={href} style="Primary_Blue" label={label} icon={icon} iconClassName="-order-1" />
  );
}
