'use client';

import { useState } from 'react';
import Link from 'next/link';

interface BirdsHomeCamProps {
  id: string; // Unique ID for the bird cam
  number: number; // Card number for easy reference
  species: string;
  liveUrl: string;
  title: string;
  description: string;
  location: string;
  thumbnail?: string;
  videoId?: string; // Fallback video ID if live_stream doesn't work
  channelName: string; // YouTube channel name for attribution
}

export default function BirdsHomeCam({
  id,
  number,
  species,
  liveUrl,
  title,
  description,
  location,
  thumbnail,
  videoId,
  channelName,
}: BirdsHomeCamProps) {
  const [modalOpen, setModalOpen] = useState(false);

  // Get channel URL (remove /live from liveUrl)
  const getChannelUrl = (url: string): string => {
    return url.replace('/live', '');
  };

  // Convert YouTube URL to embed format with autoplay
  const getEmbedUrl = (): string => {
    // If videoId is provided, use it directly (always works)
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }

    // Extract channel ID from @username URL
    if (liveUrl.includes('@DaleHollowEagleCamera')) {
      return 'https://www.youtube.com/embed/live_stream?channel=UClW_2-fZBUJbaFPR9OFlSCA&autoplay=1';
    }

    // For Osprey - @CarnyxWildTwo (may not support embedding)
    if (liveUrl.includes('@CarnyxWildTwo') || liveUrl.includes('@CarnyxWild')) {
      return 'https://www.youtube.com/embed/live_stream?channel=UCzb2wqPoBecAyANKCD-Jl6A&autoplay=1';
    }

    // For NestCamLive
    if (liveUrl.includes('@NestCamLive')) {
      return 'https://www.youtube.com/embed/live_stream?channel=UC99XoaIwg7oS7z-wY25WDKg&autoplay=1';
    }

    // For Forestry England
    if (liveUrl.includes('@ForestryEngland')) {
      return 'https://www.youtube.com/embed/live_stream?channel=UCspfY4rpODprWA_9zeZ_9EQ&autoplay=1';
    }

    // For FOBBVCAM
    if (liveUrl.includes('@FOBBVCAM')) {
      return 'https://www.youtube.com/embed/live_stream?channel=UCsFgbVuhRrPV5FqyN7kOD8g&autoplay=1';
    }

    // If it's already an embed URL, return as-is
    if (liveUrl.includes('/embed/')) {
      return liveUrl;
    }

    // Fallback: return url as-is
    return liveUrl;
  };

  return (
    <>
      <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden hover:border-green-600 transition-all group relative">
        {/* Card Number */}
        <div className="absolute top-2 right-2 z-10 bg-gray-900/80 backdrop-blur-sm w-7 h-7 rounded-full flex items-center justify-center border border-gray-600">
          <span className="text-gray-300 text-xs font-bold">{number}</span>
        </div>

        {/* Thumbnail */}
        {thumbnail && (
          <div className="relative w-full h-48 overflow-hidden">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-2 left-2">
              <div className="bg-green-500 px-2.5 py-1 rounded-full flex items-center gap-1.5 text-white text-xs font-semibold">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                Live Now
              </div>
            </div>

            {/* Action Buttons at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-3 pt-8">
              <div className="flex gap-2">
                <Link href={`/bird/${id}`} className="flex-1">
                  <button className="w-full px-3 py-2 bg-gray-700/90 hover:bg-gray-600 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm backdrop-blur-sm">
                    <i className="fa-solid fa-circle-info"></i>
                    <span>Details</span>
                  </button>
                </Link>
                <button
                  onClick={() => setModalOpen(true)}
                  className="flex-1 px-3 py-2 bg-green-600/90 hover:bg-green-700 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm backdrop-blur-sm shadow-lg shadow-green-600/30"
                >
                  <i className="fa-solid fa-play"></i>
                  <span>Watch Now</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-gray-800 to-gray-700">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-semibold text-xs">Live Now</span>
          </div>
          <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <i className="fa-solid fa-location-dot text-green-500"></i>
            <span>{location}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="mb-4">
            <span className="inline-block bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1.5 text-blue-400 text-sm font-medium">
              {species}
            </span>
          </div>

          <p className="text-gray-400 text-sm line-clamp-2">{description}</p>
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
                src={getEmbedUrl()}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Info Bar */}
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between text-sm">
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

              {/* Attribution Notice */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <i className="fa-brands fa-youtube text-red-500 text-2xl"></i>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <span className="font-semibold text-white">Conteúdo Original:</span> Esta transmissão ao vivo pertence e é operada pelo canal{' '}
                      <a
                        href={getChannelUrl(liveUrl)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 font-semibold underline"
                      >
                        {channelName}
                      </a>
                      {' '}no YouTube. Não estamos copiando ou redistribuindo o conteúdo - apenas exibindo a transmissão pública original diretamente da fonte.
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
