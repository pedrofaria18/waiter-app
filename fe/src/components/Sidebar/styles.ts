import styled from 'styled-components';

export const Container = styled.header`
  background: #fff;
  height: 100vh;
  width: 108px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  overflow: hidden;

  gap: 36px;

  padding: 40px 0;

  @media screen and (max-height: 830px) {
    padding: 40px 0;
  }
`;
