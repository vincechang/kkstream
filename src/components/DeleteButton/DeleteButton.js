import React from 'react';
import { useDispatch } from 'react-redux';
import idx from 'idx';
import { removeById } from '../../reducer/slices/users';
import styles from './DeleteButton.style';

const DeleteButton = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <button
      className="delete-button"
      type="button"
      onClick={() => dispatch(removeById({ id: idx(item, (_) => _.id) }))}
    >
      Delete
      <style jsx>{styles}</style>
    </button>
  );
};

export default DeleteButton;
