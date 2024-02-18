import logo from '../../assets/images/logo.svg';

import { navigations, userNavigations } from './navigations';

import { Item } from './components/Item';
import { LogoffButton } from './components/LogoffButton';

import { Container } from './styles';

export function Sidebar() {
  return (
    <Container>
      <img src={logo} alt="WAITERAPP" />

      <div>
        {navigations.map(({ icon, label, href }) => (
          <Item key={label} href={href} icon={icon} label={label} />
        ))}
      </div>

      <div>
        {userNavigations.map(({ icon, label, href }) => (
          <Item key={label} href={href} icon={icon} label={label} />
        ))}
        <LogoffButton />
      </div>
    </Container>
  );
}
