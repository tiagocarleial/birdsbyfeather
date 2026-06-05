'use client';

import { useState } from 'react';

interface FeaturedVideoCardProps {
  videoId: string;
  title: string;
  description: string;
  channelName: string;
  thumbnail: string;
}

export default function FeaturedVideoCard({
  videoId,
  title,
  description,
  channelName,
  thumbnail,
}: FeaturedVideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  // Reset loading state when modal opens
  const handleOpenModal = () => {
    setModalOpen(true);
    setVideoLoading(true);
  };

  return (
    <section className="bg-gray-900 py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Featured Badge */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-2">
              <i className="fa-solid fa-star text-yellow-400"></i>
              <span className="text-yellow-400 font-semibold text-sm">FEATURED VIDEO</span>
            </div>
          </div>

          {/* Featured Video Card */}
          <div>
              <div
                onClick={handleOpenModal}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="block cursor-pointer"
              >
                <div
                  className={`
                    relative bg-gradient-to-br from-gray-800 to-gray-900
                    border-2 border-yellow-500/30 rounded-xl overflow-hidden
                    transition-all duration-300 shadow-lg
                    ${isHovered ? 'border-yellow-500/60 shadow-2xl shadow-yellow-500/20 scale-[1.01]' : ''}
                  `}
                >
                  {/* Featured Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <div className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <i className="fa-solid fa-star text-xs"></i>
                      <span>Featured</span>
                    </div>
                  </div>

                  {/* YouTube Logo */}
                  <div className="absolute top-3 right-3 z-10">
                    <div className="bg-red-600 px-3 py-1.5 rounded-md shadow-lg">
                      <i className="fa-brands fa-youtube text-white text-xl"></i>
                    </div>
                  </div>

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
                          w-20 h-20 bg-red-600 rounded-full flex items-center justify-center
                          transition-all duration-300
                          ${isHovered ? 'scale-110 bg-red-500' : 'scale-100'}
                        `}
                      >
                        <i className="fa-solid fa-play text-white text-2xl ml-1"></i>
                      </div>
                    </div>
                  </div>

                  {/* Video Details */}
                  <div className="p-6">
                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                      {title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-300 text-sm md:text-base mb-4 line-clamp-2">
                      {description}
                    </p>

                    {/* Channel Info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <i className="fa-brands fa-youtube text-red-500"></i>
                        <span className="text-gray-400 text-sm font-medium">{channelName}</span>
                      </div>

                      <div
                        className={`
                          flex items-center gap-2 px-4 py-2 rounded-lg
                          bg-gradient-to-r from-red-600 to-red-500
                          text-white font-bold text-sm
                          transition-all duration-300
                          ${isHovered ? 'shadow-lg shadow-red-500/50 scale-105' : 'shadow-md'}
                        `}
                      >
                        <span>Watch Now</span>
                        <i className={`fa-solid fa-play text-xs transition-transform ${isHovered ? 'translate-x-1' : ''}`}></i>
                      </div>
                    </div>
                  </div>

                  {/* Glow Effect on Hover */}
                  <div
                    className={`
                      absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/5 to-yellow-500/0
                      transition-opacity duration-300 pointer-events-none
                      ${isHovered ? 'opacity-100' : 'opacity-0'}
                    `}
                  ></div>
                </div>
              </div>
            </div>
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
    </section>
  );
}
