import React from 'react';

const VideoEmbed = ({ url, title, placeholder }) => {
  if (!url) {
    return (
      <div className="video-placeholder">
        <p>{placeholder || '데모 영상 준비 중'}</p>
      </div>
    );
  }

  if (url.includes('.gif')) {
    return (
      <div className="video-embed">
        <img src={url} alt={title} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
    );
  }

  return (
    <div className="video-embed">
      <iframe
        src={url}
        title={title}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default VideoEmbed;
