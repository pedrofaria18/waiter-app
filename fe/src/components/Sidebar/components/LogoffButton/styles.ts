import styled from 'styled-components';

export const Container = styled.button`
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
    color: #666666;
  }

  & + button {
    margin-top: 48px;
  }
`;
