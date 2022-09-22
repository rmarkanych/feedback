import React from 'react';
import PropTypes from 'prop-types';
import s from '../Button/Button.module.css';

const Button = ({ content, onBtnClick }) => (
  <ul className={s.list}>
    {content.map(item => (
      <li key={item} className={s.item}>
        <button
          type="button"
          key={item}
          className={s.btn}
          onClick={() => {
            onBtnClick(item);
          }}
        >
          {item.toUpperCase()}
        </button>
      </li>
    ))}
  </ul>
);
Button.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string),
  onBtnClick: PropTypes.func,
};
export default Button;
