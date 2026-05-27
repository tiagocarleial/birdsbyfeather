'use client';

import { useEffect, useState } from 'react';

interface LiveVideoData {
  videoId: string;
  title?: string;
  thumbnail?: string;
  isLive: boolean;
}

/**
 * Hook to automatically fetch and update live video ID from a YouTube channel
 *
 * @param channelId - YouTube channel ID (permanent)
 * @param fallbackVideoId - Fallback video ID if API fails or no live stream
 * @param refreshInterval - How often to check for new live stream (in milliseconds)
 * @returns Current live video ID
 */
export function useLiveVideo(
  channelId: string | undefined,
  fallbackVideoId: string | undefined,
  refreshInterval: number = 5 * 60 * 1000 // Default: 5 minutes
): string | undefined {
  const [currentVideoId, setCurrentVideoId] = useState<string | undefined>(fallbackVideoId);

  useEffect(() => {
    // If no channelId, just use the fallback
    if (!channelId) {
      setCurrentVideoId(fallbackVideoId);
      return;
    }

    const fetchLiveVideo = async () => {
      try {
        const response = await fetch(`/api/youtube/live?channelId=${channelId}`);
        const data: LiveVideoData = await response.json();

        if (data.isLive && data.videoId) {
          setCurrentVideoId(data.videoId);
        } else {
          // No live stream, use fallback
          setCurrentVideoId(fallbackVideoId);
        }
      } catch (error) {
        console.error('Error fetching live video:', error);
        // On error, keep using current or fallback
        setCurrentVideoId((prev) => prev || fallbackVideoId);
      }
    };

    // Fetch immediately
    fetchLiveVideo();

    // Then refresh periodically
    const interval = setInterval(fetchLiveVideo, refreshInterval);

    return () => clearInterval(interval);
  }, [channelId, fallbackVideoId, refreshInterval]);

  return currentVideoId;
}
