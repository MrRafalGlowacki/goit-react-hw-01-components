import React from 'react';
import { Profile } from './profile/profile';
import { Statistics } from './statistics/statistics';
import { FriendList } from './friendList/FriendList';
import user from './profile/user.json';
import data from './statistics/data.json';
import friends from './friendList/friends';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendList friends={friends} />;
    </>
  );
};
