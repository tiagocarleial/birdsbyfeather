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
      // For /live URLs, we need to use a different approach
      if (url.includes('/live')) {
        // Extract channel info from URL
        // Format: youtube.com/@username/live OR youtube.com/channel/ID/live

        if (url.includes('/@')) {
          // @username format - use live_stream with channel parameter
          const username = url.split('/@')[1].split('/')[0];
          // For @username, we'll use the direct live URL in iframe
          // YouTube allows embedding /live URLs directly
          return url;
        } else if (url.includes('/channel/')) {
          // channel/ID format
          const channelId = url.split('/channel/')[1].split('/')[0];
          // Use the live_stream endpoint with channel parameter
          return `https://www.youtube.com/embed/live_stream?channel=${channelId}`;
        }

        // Fallback: return URL as-is
        return url;
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
