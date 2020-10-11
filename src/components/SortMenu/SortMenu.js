import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SortMenu.style';

const cx = classNames.bind(styles);

const SortMenu = () => {
  const [showMenu, toggleMenu] = useState(false);
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
        <li>by ID asc</li>
        <li>by ID des</li>
        <li>by Name (a-z)</li>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default SortMenu;
