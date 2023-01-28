import React from 'react';
import PropTypes from 'prop-types';
import { FriendListItem } from './friendListItem/FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  const list = friends.map(f => {
    return (
      <FriendListItem
        key={f.id}
        id={f.id}
        avatar={f.avatar}
        name={f.name}
        isOnline={f.isOnline}
      />
    );
  });
  return (<ul className={css['friend-list']}>{list}</ul>);
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
