import React from 'react';
import PropTypes from 'prop-types';

import css from './FriendListItem.module.css';

export const FriendListItem = ({ id, name, avatar, isOnline }) => {
  return (
    <li key={id} className={css.item}>
      <span className={`${css.status} ${isOnline ? css.online : ''}`}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
