'use client';

import { BirdNest } from '@/types/birdnest';
import Link from 'next/link';
import { useState } from 'react';

interface BirdNestCardProps {
  nest: BirdNest;
}

export default function BirdNestCard({ nest }: BirdNestCardProps) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  // Use youtubeId as primary (static video ID that always works)
  const [selectedCamera, setSelectedCamera] = useState(nest.youtubeId || '');
  const [thumbnailAttempt, setThumbnailAttempt] = useState(0);

  // Multiple fallback options for YouTube thumbnails
  const getThumbnailUrl = () => {
    if (nest.thumbnail) return nest.thumbnail;

    const thumbnails = [
      `https://i.ytimg.com/vi/${nest.youtubeId}/maxresdefault.jpg`,
      `https://i.ytimg.com/vi/${nest.youtubeId}/hqdefault.jpg`,
      `https://i.ytimg.com/vi/${nest.youtubeId}/mqdefault.jpg`,
      `https://i.ytimg.com/vi/${nest.youtubeId}/default.jpg`,
    ];

    return thumbnails[Math.min(thumbnailAttempt, thumbnails.length - 1)];
  };

  const thumbnailUrl = getThumbnailUrl();
  const hasMultipleCameras = nest.cameras && nest.cameras.length > 1;

  const getStatusColor = () => {
    switch (nest.status) {
      case 'active':
        return 'bg-green-500';
      case 'inactive':
        return 'bg-gray-500';
      case 'seasonal':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = () => {
    switch (nest.status) {
      case 'active':
        return 'Live Now';
      case 'inactive':
        return 'Offline';
      case 'seasonal':
        return 'Seasonal';
      default:
        return 'Unknown';
    }
  };

  return (
    <>
      <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden hover:border-green-600 transition-all group">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={thumbnailUrl}
            alt={nest.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => {
              if (thumbnailAttempt < 3) {
                setThumbnailAttempt(thumbnailAttempt + 1);
              }
            }}
          />

          {/* Status Badge */}
          <div className="absolute top-3 left-3">
            <div className={`${getStatusColor()} px-3 py-1 rounded-full flex items-center gap-2 text-white text-xs font-semibold`}>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              {getStatusText()}
            </div>
          </div>

          {/* Species Badge */}
          <div className="absolute top-3 right-3">
            <div className="bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium">
              {nest.species}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
            {nest.name}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <i className="fa-solid fa-location-dot text-green-500"></i>
            <span>{nest.location}</span>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {nest.description}
          </p>

          {/* Multiple Cameras Badge - Fixed height to keep cards aligned */}
          <div className="mb-4 h-5 flex items-center gap-2 text-xs">
            {hasMultipleCameras && (
              <>
                <i className="fa-solid fa-video text-green-400"></i>
                <span className="text-green-400 font-semibold">{nest.cameras?.length} Cameras Available</span>
              </>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Link href={`/nest/${nest.id}`} className="flex-1">
              <button className="w-full px-4 py-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2">
                <i className="fa-solid fa-circle-info"></i>
                <span>Details</span>
              </button>
            </Link>
            <button
              onClick={() => setVideoModalOpen(true)}
              className="flex-1 px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-green-600/50"
            >
              <i className="fa-solid fa-play"></i>
              <span>Watch Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors"
            >
              <i className="fa-solid fa-times text-3xl"></i>
            </button>

            {/* Camera Selection */}
            {hasMultipleCameras && (
              <div className="mb-4 flex gap-2 justify-center">
                {nest.cameras?.map((camera) => (
                  <button
                    key={camera.id}
                    onClick={() => setSelectedCamera(camera.youtubeId || '')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedCamera === camera.youtubeId
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <i className="fa-solid fa-video mr-2"></i>
                    {camera.name}
                  </button>
                ))}
              </div>
            )}

            {/* Video Player */}
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${selectedCamera}?autoplay=1`}
                title={nest.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
