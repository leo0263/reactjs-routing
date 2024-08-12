import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch video data here
    const mockVideos = [
      {
        id: 1,
        title: "Video 1",
        thumbnail:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
        duration: "10:00",
      },
      {
        id: 2,
        title: "Video 2",
        thumbnail:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
        duration: "15:00",
      },
    ];
    setVideos(mockVideos);
  }, []);

  return (
    <div>
      {videos.map((video) => (
        <div key={video.id}>
          <Link to={`/video/${video.id}`}>
            <img src={video.thumbnail} alt={video.title} />
            <p>{video.title}</p>
            <p>{video.duration}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
