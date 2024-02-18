import styled from 'styled-components';

export const Container = styled.div`
  hr {
    margin-bottom: 32px;
    opacity: 0.4;
    border-color: #CCCCCC66;
  }
`;

export const MenuNavigation = styled.div`
  display: flex;
  align-items: center;

  button {
    border: 0;
    background: transparent;
    padding: 16px 40px;
    color: #666666;
    font-size: 14px;
  }

  button.active {
    background: #fff;
    color: #d73035;
    font-weight: 600;
  }
`;


