'use client';

import { BirdNest } from '@/types/birdnest';
import { useState } from 'react';

interface NestDetailClientProps {
  nest: BirdNest;
}

export default function NestDetailClient({ nest }: NestDetailClientProps) {
  const [selectedCameraIndex, setSelectedCameraIndex] = useState(0);
  const hasMultipleCameras = nest.cameras && nest.cameras.length > 1;

  // Get the current camera (either from cameras array or primary)
  const currentCamera = nest.cameras?.[selectedCameraIndex];

  // Use youtubeId directly - it always works
  const displayUrl = currentCamera
    ? currentCamera.youtubeId
    : nest.youtubeId;

  // Get embed URL - simple version that only handles video IDs
  const getEmbedUrl = (videoId: string | undefined): string => {
    if (!videoId) return '';
    return `https://www.youtube.com/embed/${videoId}`;
  };

  // Get watch URL for "Watch on YouTube" link
  const getWatchUrl = (url: string | undefined): string => {
    if (!url) return 'https://youtube.com';

    if (url.startsWith('http')) {
      return url;
    }

    return `https://www.youtube.com/watch?v=${url}`;
  };

  return (
    <>
      {/* Video Player */}
      <div className="order-2 lg:order-1">
        {/* Camera Selection */}
        {hasMultipleCameras && (
          <div className="mb-4 flex gap-2">
            {nest.cameras?.map((camera, index) => (
              <button
                key={camera.id}
                onClick={() => setSelectedCameraIndex(index)}
                className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  selectedCameraIndex === index
                    ? 'bg-green-600 text-white shadow-lg shadow-green-600/20'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700'
                }`}
              >
                <i className="fa-solid fa-video"></i>
                {camera.name}
              </button>
            ))}
          </div>
        )}

        <div className="aspect-video rounded-xl overflow-hidden bg-black border border-gray-700">
          {displayUrl ? (
            <iframe
              key={displayUrl} // Force re-render when URL changes
              className="w-full h-full"
              src={getEmbedUrl(displayUrl)}
              title={nest.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <div className="text-center">
                <i className="fa-solid fa-video-slash text-4xl mb-4"></i>
                <p>No live stream available</p>
              </div>
            </div>
          )}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-semibold">Live Stream</span>
          </div>
          <a
            href={`https://www.youtube.com/watch?v=${displayUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
          >
            <i className="fa-brands fa-youtube"></i>
            Watch on YouTube
          </a>
        </div>
      </div>
    </>
  );
}
