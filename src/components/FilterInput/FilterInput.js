import React, { Fragment } from 'react';
import styles from './FilterInput.style';

const FilterInput = () => {
  return (
    <Fragment>
      <input
        className="filter-input"
        type="text"
        placeholder="Input to filter user name"
      ></input>
      <style jsx>{styles}</style>
    </Fragment>
  );
};

export default FilterInput;
