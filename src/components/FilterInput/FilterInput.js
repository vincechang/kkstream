import React, { Fragment } from 'react';
import idx from 'idx';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, setFilter } from '../../reducer/slices/users';
import styles from './FilterInput.style';

const FilterInput = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <input
        className="filter-input"
        type="text"
        placeholder="Input to filter user name"
        value={filter}
        onChange={(e) => {
          dispatch(setFilter(idx(e, (_) => e.target.value)));
        }}
        onKeyDown={(e) => {
          if (idx(e, (_) => _.key) == 'Escape') dispatch(setFilter(''));
        }}
      ></input>
      <style jsx>{styles}</style>
    </Fragment>
  );
};

export default FilterInput;
