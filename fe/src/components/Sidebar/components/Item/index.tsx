import { useLocation, useNavigate } from 'react-router-dom';

import { Container } from './styles';

interface ItemProps {
  icon: string;
  label: string;
  href: string;
}

export function Item({ icon, label, href }: ItemProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isActualPage = pathname === href;

  return (
    <Container
      type="button"
      key={label}
      onClick={() => navigate(href)}
      isActive={isActualPage}
    >
      <img src={icon} alt={label} />
      <span>{label}</span>
      <hr />
    </Container>
  );
}
