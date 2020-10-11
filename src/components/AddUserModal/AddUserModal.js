import React from 'react';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { closeAddUserModal } from '../../reducer/slices/ui';
import { addUser } from '../../reducer/slices/users';
import styles from './AddUserModal.style';

const cx = classNames.bind(styles);

const Modal = ({ isOpen }) => {
  const dispatch = useDispatch();

  const handleClickCancelButton = (e) => {
    dispatch(closeAddUserModal());
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values) => {
      dispatch(closeAddUserModal());
      dispatch(addUser(values));
    },
  });

  return (
    <div className={cx('modal-wrapper', isOpen ? 'visible' : 'invisible')}>
      <div className="modal">
        <div className="modal__title">Add User</div>
        <form className="add-user-form" onSubmit={formik.handleSubmit}>
          <div className="add-user-form__group">
            <label className="add-user-form__label" htmlFor="username">
              Name
            </label>
            <input
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="add-user-form__error">
                {formik.errors.username}
              </div>
            ) : null}
          </div>
          <div className="add-user-form__group">
            <label className="add-user-form__label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="add-user-form__error">{formik.errors.email}</div>
            ) : null}
          </div>
          <button
            className="modal__button--cancel"
            type="button"
            onClick={handleClickCancelButton}
          >
            Cancel
          </button>
          <button className="modal__button--add" type="submit">
            Add
          </button>
        </form>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default Modal;
