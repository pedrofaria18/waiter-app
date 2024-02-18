import logOffIcon from '../../../../assets/images/log-off.svg';

import { Container } from './styles';

export function LogoffButton() {
  return (
    <Container type="button" onClick={() => console.log('Logoff')}>
      <img src={logOffIcon} alt="Botão Sair" />
      <span>Sair</span>
    </Container>
  );
}
