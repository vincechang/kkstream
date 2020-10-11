import css from 'styled-jsx/css';

export default css`
  .modal-wrapper {
    top: 0;
    left: 0;
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 99;

    .modal {
      position: absolute;
      background: white;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: flex-start;
      padding: 16px 0;
    }

    &.visible {
      transition: all 0.4s;
      opacity: 1;
      visibility: visible;

      .modal {
        transition: all 0.4s;
        top: 50%;
      }
    }

    &.invisible {
      transition: all 0.4s;
      opacity: 0;
      visibility: hidden;

      .modal {
        transition: all 0.4s;
        top: 100%;
      }
    }
  }

  .modal__title {
    width: 100%;
    letter-spacing: 0.5px;
    text-align: center;
    margin-bottom: 16px;
    font-weight: bold;
  }

  .modal__button {
    width: 116px;
    height: 40px;
    border-radius: 0;
    letter-spacing: 0.5px;
    text-align: center;
    cursor: pointer;
    outline: none;
    color: black;
    border: 1px solid black;

    &--cancel {
    }

    &--add {
      margin-left: 7px;
    }
  }

  .add-user-form {
    width: 100%;
    letter-spacing: 0.5px;
    text-align: center;
    color: black;
    margin: 32px 0;
  }

  .add-user-form__group {
    height: 58px;

    &--last {
      margin-bottom: 20px;
    }
  }

  .add-user-form__label {
    display: inline-block;
    width: 100px;
  }

  .add-user-form__error {
    color: red;
    font-size: 16px;
  }
`;
