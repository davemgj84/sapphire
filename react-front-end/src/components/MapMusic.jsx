import React from "react";
import Sound from "react-sound";
import song from "../Sound/Abstraction - Three Red Hearts - Sanctuary.wav";

class MapMusic extends React.Component {
  render() {
    return (
      <Sound
        url={song}
        playStatus={Sound.status.PLAYING}
        playFromPosition={300 /* in milliseconds */}
        volume={5}
        autoLoad={true}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
        loop={true}
      />
    );
  }
}

export default MapMusic;
