import css from 'styled-jsx/css';

export default css`
  .delete-button {
    margin-bottom: 7px;

    &:hover {
      color: red;
      border: 1px solid red;
    }

    &:focus {
      outline: none;
    }
  }
`;
