import React from 'react';
import { Link } from 'react-router';

import TrackIndexItem from './track_index_item';
import { selectMP3s } from '../reducers/selectors';

class TrackIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        loading: true
    };
  }

  componentDidMount() {
    this.setState({
        loading: true
    });
    this.props.getTracks(this.props.searchParam)
        .then(this.setState({
            loading: false
        }));
  }

    componentWillUnmount() {
        this.setState({
            loading: true
        });
    }
  componentWillReceiveProps(newProps) {
    this.setState({
        loading: true
    });
    if (newProps.searchParam !== this.props.searchParam) {
      this.props.getTracks(newProps.searchParam);
     }
    this.setState({
        loading: false
    });
  }

  render() {
    const { tracks } = this.props;
    if (this.state.loading) {
        return <div></div>;
    }
    else if (this.props.tracks.length === 0) {
      return (<h1 className="nothing-here">Nothing here yet... <br/> Try <strong><Link to="/upload">uploading</Link></strong> something!</h1>);
    }
    else {
      return (
        <ul className="track-index">
          {tracks.map( (track, index) => <TrackIndexItem
            populateQueue={ () => this.props.populateQueue(this.props.tracks, index) }
            key={`track-${track.id}`}
            track={ track }
            index={ index }
            queue={ this.props.queue }
            updatePlaying={ this.props.updatePlaying }
            updateId={ () => this.props.updateId(track.id) }/>)}
        </ul>
      );
    }

  }
}
 export default TrackIndex;
