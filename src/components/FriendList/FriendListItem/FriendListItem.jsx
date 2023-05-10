import PropTypes from 'prop-types';

export const FriendListItem = () => {
  return (
    <li>
      <img src="" alt="User avatar" width="48" />
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
