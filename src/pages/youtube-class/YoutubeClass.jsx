import React from "react";

import BackBtn from "../../components/BackBtn";
import youtube from "./apis/youtube";
import SearchBar from "./SearchBar";

class YoutubeClass extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {
    videos: [],
  };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(response);

    this.setState({ videos: response.data.items }, () => {
      console.log(this.state.videos);
    });
  };

  render() {
    return (
      <>
        <BackBtn />
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
            <p>Here are {this.state.videos.length} videos</p>
          </div>
        </div>
      </>
    );
  }
}

export default YoutubeClass;
