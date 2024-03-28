import React, { useState } from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  thumbnailUrl: string;
  onPlay: () => void;
  onEnd: () => void;
  onPause: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, thumbnailUrl, onPlay, onEnd, onPause }) => {
  const [showVideo, setShowVideo] = useState<boolean>(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  const handlePlay = () => {
    onPlay(); // Notify parent component that video is played
  };

  const handleEnd = () => {
    onEnd(); // Notify parent component that video has ended
  };

  const handlePause = () => {
    onPause(); // Notify parent component that video is paused
  };

  return (
    <div>
      {showVideo ? (
        <video controls autoPlay onPlay={handlePlay} onEnded={handleEnd} onPause={handlePause}>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={thumbnailUrl} alt="Video Thumbnail" onClick={toggleVideo} />
      )}
    </div>
  );
};

export default VideoPlayer;
