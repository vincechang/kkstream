import React from 'react';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { closeAddUserModal } from '../../reducer/slices/ui';
import styles from './AddUserModal.style';

const cx = classNames.bind(styles);

const Modal = ({ isOpen }) => {
  const dispatch = useDispatch();

  const handleClickAddButton = (e) => {
    dispatch(closeAddUserModal());
  };

  const handleClickCancelButton = (e) => {
    dispatch(closeAddUserModal());
  };

  return (
    <div className={cx('modal-wrapper', isOpen ? 'visible' : 'invisible')}>
      <div className="modal">
        <div className="modal__title">Add User</div>
        <div className="modal__form">Form</div>
        <button
          className="modal__button--cancel"
          onClick={handleClickCancelButton}
        >
          Cancel
        </button>
        <button className="modal__button--add" onClick={handleClickAddButton}>
          Add
        </button>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default Modal;
