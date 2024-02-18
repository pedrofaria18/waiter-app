import styled from 'styled-components';

interface ContainerProps {
  isActive: boolean;
}

export const Container = styled.button<ContainerProps>`
  width: 100%;
  border: 0;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  outline: none;

  span {
    font-size: 14px;
    color: ${(props) => (props.isActive ? '#d73035' : '#666666')};
  }

  hr {
    width: 12px;
    height: 0.5px;
    border: 0.5px solid
      ${(props) => (props.isActive ? '#d73035' : 'transparent')};
  }

  & + button {
    margin-top: 48px;
  }

  @media screen and (max-height: 830px) {
    & + button {
      margin-top: 24px;
    }
  }
`;
