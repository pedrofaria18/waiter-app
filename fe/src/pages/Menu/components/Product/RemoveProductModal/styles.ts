import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const Content = styled.div`
  display: flex;
  border: 1px solid #cccccc66;
  border-radius: 8px;
  width: 352px;

  img {
    border-radius: 8px 0 0 8px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
    color: #333333;
    font-weight: 500;
  }
`;
