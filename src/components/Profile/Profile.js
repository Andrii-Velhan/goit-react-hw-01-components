import PropTypes from 'prop-types';
import defaultImage from '../default.jpg';

export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={name} className="avatar" width="480" />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity"> {stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity"> {stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity"> {stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

Profile.defaultProps = {
  avatar: defaultImage,
};