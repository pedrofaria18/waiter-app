import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 32px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  strong {
    font-size: 18px;
    color: #666666;
  }
`;

export const ImageInput = styled.div`
  border: 1px solid #cccccc66;
  border-radius: 8px;
  width: 416px;

  > img {
    width: 100%;
    height: 160px;
    border-radius: 8px 8px 0 0;
  }

  div {
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fafafa;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
    cursor: pointer;
    gap: 8px;
    font-weight: 600;
    color: #d73035;
  }

  input[type="file"] {
    display: none;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  span {
    font-size: 14px;
    color: #333333;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

interface CategoryItemProps {
  active: boolean;
}

export const CategoryItem = styled.div<CategoryItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 14px;
  cursor: pointer;
  font-size: 14px;
  color: #333333;
  border: 1px solid #0000001a;

  ${({ active }) =>
    active &&
    css`
      border-color: #d73035;
    `}

  border-radius: 75px;

  input[type="checkbox"] {
    display: none;
  }

  input:checked {
    background-color: red;
  }
`;

export const IngredientContainer = styled.div`
  height: 476px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: auto;
`;

export const IngredientItem = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 4px;
  border: 1px solid #cccccc4d;
  border-radius: 8px;
  cursor: pointer;
  padding: 16px;
  font-size: 14px;
  color: #333333;
`;
