import React, { useState, useEffect } from "react";

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import useVideos from "./hooks/useVideos";

const YoutubeHook = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("Слуцкая брама");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <>
      <div className="youtube">
        <div className="row">
          <div className="col-12">
            <h1 className="section-title">Youtube client</h1>
            <p className="subtitle">
              Here you can search for any Youtube video, watch it and read
              additional info about it.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <SearchBar onTermSubmit={search} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            {!selectedVideo ? (
              <p>Please submit your search term.</p>
            ) : (
              <div className="iframe-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                  frameBorder="0"
                  title="iframe"
                />
              </div>
            )}
          </div>
          <div className="col-md-4">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default YoutubeHook;
