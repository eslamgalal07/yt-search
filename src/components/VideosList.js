import React from "react";
import VideoItem from "./VideoItem";

const VideosList = ({ videos, onVideoClick }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoClick={onVideoClick}
        video={video}
      />
    );
  });
  return <div className="ui relaxed divided list "> {renderedList} </div>;
};

export default VideosList;
