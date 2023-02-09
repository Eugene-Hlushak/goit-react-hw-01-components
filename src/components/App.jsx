import user from '../user.json';
import data from '../data.json';
import Statistics from './Statistics/Statistics';
import Profile from './Profile/Profile';
import friends from 'friends.json';
import FriendList from './FriendList/FriendList';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
