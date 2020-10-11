import css from 'styled-jsx/css';

export default css`
  .sort-menu__wrapper {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    padding: 0 0 5px 0;

    & > .sort-menu__popup {
      display: none;
    }

    &:hover {
      & > .sort-menu__popup {
        display: flex;
      }
    }
  }

  .sort-menu__button:hover {
    color: black;
    border: 1px solid black;
  }

  .sort-menu__popup {
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: white;
    z-index: 2;
    top: 100%;
    padding: 0 7px;
    border: 1px solid black;
    min-width: 200px;
    overflow: visible;

    &.visible {
      display: flex !important;
    }

    &.invisible {
      display: none;
    }

    & > li {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 40px;

      &:hover {
        color: red;
        cursor: pointer;
      }
    }
  }
`;
