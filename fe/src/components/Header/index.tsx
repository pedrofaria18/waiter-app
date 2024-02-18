import { useLocation } from 'react-router-dom';
import refreshIcon from '../../assets/images/refresh.svg';
import { pagesHeaderInfo } from './pagesHeaderInfo';

import { Action, Container, Content } from './styles';

export function Header() {
  const { pathname } = useLocation();
  const path = pathname.split('/')[1] === '' ? 'home' : pathname.split('/')[1];

  return (
    <Container>
      <Content>
        <div>
          <img
            src={pagesHeaderInfo[path].icon}
            alt={pagesHeaderInfo[path].title}
          />
          <strong>{pagesHeaderInfo[path].title}</strong>
        </div>
        <span>{pagesHeaderInfo[path].subtitle}</span>
      </Content>

      {path === 'home' && (
        <Action type="button" onClick={() => console.log('refresh')}>
          <img src={refreshIcon} alt="Refresh" />
          <span>Reiniciar o dia</span>
        </Action>
      )}
    </Container>
  );
}
