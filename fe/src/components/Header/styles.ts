import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 36px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  div {
    display: flex;
    gap: 8px;

    strong {
      font-size: 24px;
      color: #333333;
    }
  }

  span {
    color:  #666666;
  }
`;

export const Action = styled.button`
  display: flex;
  gap: 8px;
  border: 0;
  height: 100%;
  background: transparent;
  outline: none;
  align-items: center;

  span {
    color: #D73035;
    font-weight: 600;
  }
`;
