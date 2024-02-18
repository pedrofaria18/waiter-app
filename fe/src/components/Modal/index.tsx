import { ReactNode } from 'react';

import closeIcon from '../../assets/images/close-icon.svg';

import { Actions, ModalBody, Overlay } from './styles';

interface ModalProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
  button: {
    primary?: ReactNode;
    secondary?: ReactNode
  };
  width?: string;
}

export function Modal({ title, onClose, children, button, width }: ModalProps) {
  return (
    <Overlay>
      <ModalBody width={width}>
        <header>
          <strong>{title}</strong>

          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="Ícone de fechar página" />
          </button>
        </header>

        {children}
        <Actions>
          {button.secondary || <span />}
          {button.primary}
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
