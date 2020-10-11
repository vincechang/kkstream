import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { openAddUserModal } from '../../reducer/slices/ui';
import style from './AddUserButton.style';

const AddUserButton = () => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <button
        className="add-user-button"
        onClick={() => dispatch(openAddUserModal())}
      >
        Add User
      </button>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export default AddUserButton;
