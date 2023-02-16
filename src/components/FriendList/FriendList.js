import PropTypes from 'prop-types';
import { List, ListItem, Status, Name } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <List>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <ListItem key={id}>
            <Status status={isOnline}></Status>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <Name className="name">{name}</Name>
          </ListItem>
        );
      })}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
