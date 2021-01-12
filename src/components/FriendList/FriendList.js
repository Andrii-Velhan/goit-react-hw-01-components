import PropTypes from 'prop-types';
import s from './FriendList.module.css';
export default function FriendList({
	friends,
}) {
	return (
		<ul className="friend-list">
			{friends.map(friend => (
				<FriendListItem
					key={friend.id}
					avatar={friend.avatar}
					name={friend.name}
					isOnline={friend.isOnline}
				/>
			))}
		</ul>
	)
}

FriendList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
		}),
	),
}
function FriendListItem({
	avatar,
	name,
	isOnline,
}) {
	return (
		<li className="item" >
			<span className={isOnline ? s.status + ` ${s.isOnline}` : s.status}></span>
			<img className="avatar" src={avatar} alt={name} width="48" />
			<p className="name">{name}</p>
		</ li>
	)
}

FriendListItem.propTypes = {
	avatar: PropTypes.string,
	name: PropTypes.string,
	isOnline: PropTypes.bool,
}

