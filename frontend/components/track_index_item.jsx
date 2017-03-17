import React from 'react';
import { Link } from 'react-router';

const TrackIndexItem = ({ track }) => (
  <li className="track-index-item">
    <Link to={`/users/${track.user.user_id}`}>{ track.user.username }</Link>
    <Link to={`/tracks/${track.id}`}>{ track.title }</Link>
    <img src={ track.album_artwork_url }></img>
  </li>
);

export default TrackIndexItem;
