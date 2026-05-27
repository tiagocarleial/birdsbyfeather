'use client';

import { useState } from 'react';

interface BirdsHomeCamProps {
  species: string;
  liveUrl: string;
  title: string;
  description: string;
  location: string;
}

export default function BirdsHomeCam({
  species,
  liveUrl,
  title,
  description,
  location,
}: BirdsHomeCamProps) {
  const [modalOpen, setModalOpen] = useState(false);

  // Convert YouTube URL to embed format
  const getEmbedUrl = (url: string): string => {
    // Extract channel ID from @username URL
    // For @DaleHollowEagleCamera -> channel ID is UClW_2-fZBUJbaFPR9OFlSCA
    if (url.includes('@DaleHollowEagleCamera')) {
      return 'https://www.youtube.com/embed/live_stream?channel=UClW_2-fZBUJbaFPR9OFlSCA';
    }

    // Fallback: return url as-is
    return url;
  };

  return (
    <>
      <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden hover:border-green-600 transition-all group">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-700">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-semibold text-sm">Live Now</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <i className="fa-solid fa-location-dot text-green-500"></i>
            <span>{location}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-4">
            <span className="inline-block bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-blue-400 text-sm font-medium">
              {species}
            </span>
          </div>

          <p className="text-gray-400 mb-6">{description}</p>

          {/* Watch Now Button */}
          <button
            onClick={() => setModalOpen(true)}
            className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-green-600/50"
          >
            <i className="fa-solid fa-play"></i>
            <span>Watch Now</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors"
            >
              <i className="fa-solid fa-times text-3xl"></i>
            </button>

            {/* Video Player */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src={getEmbedUrl(liveUrl)}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Info Bar */}
            <div className="mt-4 flex items-center justify-between text-sm">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">Live Stream</span>
              </div>
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <i className="fa-brands fa-youtube"></i>
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
