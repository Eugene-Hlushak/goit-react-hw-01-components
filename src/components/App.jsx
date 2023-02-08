import user from '../user.json';
import data from '../data.json';
import Statistics from './Statistics/Statistics';
import Profile from './Profile/Profile';

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
      <Statistics stats={data} />
    </div>
  );
};
