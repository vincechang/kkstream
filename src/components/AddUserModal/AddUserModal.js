import React from 'react';
import classNames from 'classnames/bind';
import styles from './AddUserModal.style';

const cx = classNames.bind(styles);

const Modal = ({ isOpen }) => {
  return (
    <div className={cx('modal-wrapper', isOpen ? 'visible' : 'invisible')}>
      <div className="modal">
        <div className="modal__title">Add User</div>
        <div className="modal__form">Form</div>
        <button className="modal__button--cancel">Cancel</button>
        <button className="modal__button--add">Add</button>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default Modal;
