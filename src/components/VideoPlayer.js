import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  const { id } = useParams();
  // Fetch video URL based on ID
  const videoUrl = `https://path/to/video/${id}.mp4`;

  return (
    <div>
      <ReactPlayer url={videoUrl} controls={true} />
    </div>
  );
};

export default VideoPlayer;
