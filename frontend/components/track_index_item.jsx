import React from 'react';
import { Link } from 'react-router';

const TrackIndexItem = ({ track }) => (
  <ul className="track-index-item">
    <li className="track-index-item">
      <img
        className="track-index-album-artwork"
        src={ track.album_artwork_url }>
      </img>
    </li>
    <li>
      <i className="fa fa-play fa-lg" aria-hidden="true"></i>
    </li>
    <ul className="track-index-item-information">
      <li>
        <Link
          to={`/users/${track.user.user_id}`}
          className="track-index-username">
          { track.user.username }
        </Link>
      </li>
      <li>
        <Link
          to={`/tracks/${track.id}`}
          className="track-index-track-title">
          { track.title }
        </Link>
      </li>
    </ul>
  </ul>
);

export default TrackIndexItem;
