import styled from 'styled-components';

export const Container = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .info {
      display: flex;
      gap: 8px;
      align-items: center;

      strong {
        font-size: 18px;
        color: #333333;
      }

      span {
        background: #cccccc33;
        padding: 4px 8px;
        color: #333333;
        border-radius: 4px;
      }
    }

    > button {
      background: transparent;
      border: 0;
      outline: none;
      color: #d73035;
      font-size: 14px;
      font-weight: 600;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 16px;
    font-size: 14px;
    border: 1px solid #CCCCCC66;
    border-radius: 8px;

    thead tr {
      background-color: #cccccc33;
      color: #333333;
      text-align: left;
      font-weight: bold;
    }

    th,
    td {
      padding: 12px 15px;
    }

    tbody tr {
      border-bottom: 1px solid #cccccc66;
      border-radius: 8px;
    }

    tbody tr:last-of-type {
      border-bottom: 1px solid #CCCCCC66;
      border-radius: 8px;
    }

    td button {
      background: transparent;
      border: 0;
      outline: none;

      & + button {
        margin-left: 16px;
      }
    }

    thead th:last-of-type, tbody td:last-of-type {
      display: flex;
      justify-content: end;
    }

    thead th:last-of-type {
      margin-right: 24px;
    }
  }
`;
