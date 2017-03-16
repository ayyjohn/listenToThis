import React from 'react';

class NewTrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <header className="navBar">
        </header>
        <section>
          <h1>Spread the Music</h1>
          <input
            type="file" />
        </section>
        <form className="new-track-form">
          <input
            type="file"/>
          <input
            type="text"
            placeholder="title">
          </input>
          <select>
            <option value="alternative">Alternative</option>
            <option value="chip-tune">Chip-Tune</option>
            <option value="classical">Classical</option>
            <option value="country">Country</option>
            <option value="drum-and-bass">Drum &amp; Bass</option>
            <option value="dubstep">Dubstep</option>
            <option value="electronica">Electronica</option>
            <option value="glitch-hop">Glitch-Hop</option>
            <option value="hip-hop">Hip-Hop</option>
            <option value="house">House</option>
            <option value="metal">Metal</option>
            <option value="pop">Pop</option>
            <option value="r-and-b">R&amp;B</option>
            <option value="reggae">Reggae</option>
            <option value="reggaeton">Reggaeton</option>
            <option value="rock">Rock</option>
            <option value="soundtrack">Soundtrack</option>
            <option value="soft-rock">Soft Rock</option>
            <option value="techno">Techno</option>
          </select>
          <textarea
            placeholder="describe your track"></textarea>
          <button>Cancel</button>
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default NewTrackForm;
