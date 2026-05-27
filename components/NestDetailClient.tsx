'use client';

import { BirdNest, Camera } from '@/types/birdnest';
import { useState } from 'react';
import { useLiveVideo } from '@/hooks/useLiveVideo';

interface NestDetailClientProps {
  nest: BirdNest;
}

/**
 * Get the effective video ID for a camera
 * Priority: liveUrl > channelId (with auto-update) > youtubeId (static)
 */
function getVideoIdOrUrl(camera: { youtubeId?: string; channelId?: string; liveUrl?: string }): string {
  if (camera.liveUrl) {
    // If liveUrl is provided, extract the channel/ID from it
    // e.g., "https://www.youtube.com/@BigBearValley/live" -> embed the URL directly
    return camera.liveUrl;
  }
  return camera.youtubeId || '';
}

export default function NestDetailClient({ nest }: NestDetailClientProps) {
  // For primary camera
  const primaryVideoId = useLiveVideo(nest.channelId, nest.youtubeId);
  const primaryUrl = nest.liveUrl || primaryVideoId;

  const [selectedCameraIndex, setSelectedCameraIndex] = useState(0);
  const hasMultipleCameras = nest.cameras && nest.cameras.length > 1;

  // Get the current camera (either from cameras array or primary)
  const currentCamera = nest.cameras?.[selectedCameraIndex];

  // Use live video hook for current camera if it has channelId
  const currentCameraVideoId = useLiveVideo(
    currentCamera?.channelId,
    currentCamera?.youtubeId
  );

  // Determine what to display
  const displayUrl = currentCamera
    ? (currentCamera.liveUrl || currentCameraVideoId)
    : primaryUrl;

  // Get embed URL
  const getEmbedUrl = (url: string | undefined): string => {
    if (!url) return '';

    // If it's already a full URL (liveUrl case)
    if (url.startsWith('http')) {
      // Convert various YouTube URL formats to embed format
      if (url.includes('/live')) {
        // e.g., youtube.com/@channel/live -> youtube.com/embed/live_stream?channel=...
        // For now, just return the URL as-is for iframe src
        return url.replace('/live', '/embed/live');
      }
      return url;
    }

    // Otherwise it's a video ID
    return `https://www.youtube.com/embed/${url}`;
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
            <span className="text-green-400 font-semibold">
              {currentCamera?.channelId || nest.channelId ? 'Auto-Updating Live Stream' : 'Live Stream'}
            </span>
          </div>
          <a
            href={getWatchUrl(displayUrl)}
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
