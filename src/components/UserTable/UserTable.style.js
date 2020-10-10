import css from 'styled-jsx/css';

export default css`
  .user-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    cursor: default;

    thead {
      tr {
        border-bottom: 1px solid black;
      }

      td {
        white-space: nowrap;
        line-height: 40px;
        vertical-align: middle;
        font-weight: bold;
      }
    }

    tbody {
      tr {
        border-bottom: 1px solid black;
      }

      td {
        white-space: nowrap;
        line-height: 40px;
        vertical-align: middle;
      }
    }
  }
`;
