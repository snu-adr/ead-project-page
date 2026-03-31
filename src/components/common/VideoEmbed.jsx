import React from 'react';

const VideoEmbed = ({ url, title }) => {
  if (!url) {
    return (
      <div className="video-placeholder">
        <p>{title || '데모 영상 준비 중'}</p>
      </div>
    );
  }

  return (
    <div className="video-embed">
      <iframe
        src={url}
        title={title}
        allowFullScreen
      />
    </div>
  );
};

export default VideoEmbed;
