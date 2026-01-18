"use client";

import React, { useRef, useState } from "react";

const VideoEditor: React.FC = () => {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">OpenCapCut Editor</h1>

      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        className="mb-4 p-2 border border-gray-300 rounded"
      />

      {videoSrc && (
        <video
          ref={videoRef}
          src={videoSrc}
          controls
          className="w-full max-w-2xl h-auto rounded shadow-lg"
        >
          Your browser does not support the video tag.
        </video>
      )}

      {!videoSrc && (
        <p className="text-gray-500">Please upload a video to start editing.</p>
      )}
    </div>
  );
};

export default VideoEditor;