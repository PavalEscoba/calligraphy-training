import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  const { title, description, publishTime, thumbnails } = video.snippet;
  return (
    <div
      className="video-item"
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <div className="video-item__img-wrapper">
        <img
          src={thumbnails.default.url}
          alt={description}
          title={description}
        />
      </div>
      <div className="video-item__text-wrapper">
        <h3 className="title">{title}</h3>
        <p>posted at: {publishTime};</p>
      </div>
    </div>
  );
};

export default VideoItem;
