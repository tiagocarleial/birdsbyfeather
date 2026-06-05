'use client';

import { useState } from 'react';

interface VideoCardProps {
  videoId: string;
  title: string;
  description: string;
  channelName: string;
  thumbnail: string;
}

export default function VideoCard({
  videoId,
  title,
  description,
  channelName,
  thumbnail,
}: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  // Reset loading state when modal opens
  const handleOpenModal = () => {
    setModalOpen(true);
    setVideoLoading(true);
  };

  return (
    <>
      <div
        onClick={handleOpenModal}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="cursor-pointer"
      >
        <div
          className={`
            relative bg-gradient-to-br from-gray-800 to-gray-900
            border-2 border-gray-700/50 rounded-xl overflow-hidden
            transition-all duration-300 shadow-lg
            ${isHovered ? 'border-green-500/60 shadow-2xl shadow-green-500/20 scale-[1.02]' : ''}
          `}
        >
          {/* Video Thumbnail */}
          <div className="relative aspect-video overflow-hidden">
            <img
              src={thumbnail}
              alt={title}
              className={`
                w-full h-full object-cover
                transition-transform duration-300
                ${isHovered ? 'scale-105' : 'scale-100'}
              `}
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <div
                className={`
                  w-16 h-16 bg-red-600 rounded-full flex items-center justify-center
                  transition-all duration-300
                  ${isHovered ? 'scale-110 bg-red-500' : 'scale-100'}
                `}
              >
                <i className="fa-solid fa-play text-white text-xl ml-1"></i>
              </div>
            </div>
          </div>

          {/* Video Details */}
          <div className="p-5">
            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-2 leading-tight line-clamp-2">
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {description}
            </p>

            {/* Channel Info */}
            <div className="flex items-center gap-2">
              <i className="fa-brands fa-youtube text-red-500"></i>
              <span className="text-gray-400 text-sm font-medium">{channelName}</span>
            </div>
          </div>

          {/* Glow Effect on Hover */}
          <div
            className={`
              absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-green-500/0
              transition-opacity duration-300 pointer-events-none
              ${isHovered ? 'opacity-100' : 'opacity-0'}
            `}
          ></div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-7xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors z-10"
            >
              <i className="fa-solid fa-times text-3xl"></i>
            </button>

            {/* Video Player */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
              {/* Loading Spinner */}
              {videoLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
                  <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-gray-600 border-t-green-500 mb-4"></div>
                    <p className="text-gray-400 text-sm">Loading video...</p>
                  </div>
                </div>
              )}

              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => setVideoLoading(false)}
              ></iframe>
            </div>

            {/* Info Bar */}
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-3">
                  <i className="fa-brands fa-youtube text-red-500"></i>
                  <span className="text-white font-semibold">{title}</span>
                </div>
                <a
                  href={`https://www.youtube.com/watch?v=${videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <i className="fa-brands fa-youtube"></i>
                  Watch on YouTube
                </a>
              </div>

              {/* Attribution Notice */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <i className="fa-brands fa-youtube text-red-500 text-2xl"></i>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <span className="font-semibold text-white">Original Content:</span> This video belongs to and is operated by{' '}
                      <span className="text-green-400 font-semibold">{channelName}</span>
                      {' '}on YouTube. We are not copying or redistributing the content - just displaying the original public video directly from the source.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
