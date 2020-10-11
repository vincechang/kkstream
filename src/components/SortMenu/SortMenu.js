import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { sortBy } from '../../reducer/slices/users';
import styles from './SortMenu.style';

const cx = classNames.bind(styles);

const SortMenu = () => {
  const [showMenu, toggleMenu] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="sort-menu__wrapper">
      <button
        className="sort-menu__button"
        onClick={() => toggleMenu(!showMenu)}
      >
        Sort
      </button>
      <div
        className={cx('sort-menu__popup', showMenu ? 'visible' : 'invisible')}
      >
        <li onClick={() => dispatch(sortBy('id-asc'))}>by ID asc</li>
        <li onClick={() => dispatch(sortBy('id-des'))}>by ID des</li>
        <li onClick={() => dispatch(sortBy('name-a-z'))}>by Name (a-z)</li>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default SortMenu;
