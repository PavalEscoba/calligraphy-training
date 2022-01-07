import React from "react";

import youtube from "./apis/youtube";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";

class YoutubeClass extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
    this.setState({ selectedVideo: response.data.items[0] });
  };

  render() {
    return (
      <>
        <div className="youtube">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="title">Youtube client</h1>
              <p>
                Here you can search for any Youtube video, watch it and read
                additional info about it.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <SearchBar onTermSubmit={this.onTermSubmit} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              {!this.state.selectedVideo ? (
                <p>Please submit your search term.</p>
              ) : (
                <div className="iframe-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${this.state.selectedVideo.id.videoId}`}
                    frameBorder="0"
                    title="iframe"
                  />
                </div>
              )}
            </div>
            <div className="col-md-4">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default YoutubeClass;
