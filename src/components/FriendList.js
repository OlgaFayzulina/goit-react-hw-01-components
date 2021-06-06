import React from "react";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => (
    <ul>
        {friends.map(({ id, isOnline, avatar, name }) => (
            <li class="item" key={id}>
                <span class={isOnline ? true : false}></span>
                <img class="avatar" src={avatar} alt={name} width="48" />
                <p class="name">{name}</p>
            </li>
        ))}
    </ul>
);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      }),
    ),
  };

export default FriendList;