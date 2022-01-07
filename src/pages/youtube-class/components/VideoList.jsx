import React from "react";

import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  render() {
    return this.props.videos.map((video) => (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={this.props.onVideoSelect}
      />
    ));
  }
}

export default VideoList;
