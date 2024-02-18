import styled from 'styled-components';

export const Overlay = styled.div`
  left: 0px;
  top: 0px;

  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;

  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ModalBodyProps {
  width?: string
}

export const ModalBody = styled.div<ModalBodyProps>`
  background: #fff;
  border-radius: 8px;

  width: ${(props => `${props.width}px` || '480px')};
  padding: 32px;

  overflow-x: auto;
  max-height: calc(100% - 40px);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 24px;

    strong {
      font-size: 24px;
    }

    button {
      display: flex;
      border: 0;
      background: transparent;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  margin-top: 32px;
  align-items: center;
  justify-content: space-between;

  button {
    border: 0;
    font-weight: 600;
    padding: 12px 24px;
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .primary {
    background: #D73035;
    border-radius: 48px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-weight: 600;
  }

  .secondary {
    color: #D73035;
    background-color: transparent;
  }
`;
