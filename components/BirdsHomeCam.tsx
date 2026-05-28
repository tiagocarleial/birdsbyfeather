'use client';

import { useState } from 'react';
import Link from 'next/link';
import AmazonModalBanner from './AmazonModalBanner';

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
  const [videoLoading, setVideoLoading] = useState(true);

  // Reset loading state when modal opens
  const handleOpenModal = () => {
    setModalOpen(true);
    setVideoLoading(true);
  };

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

    // For Uist Forest Retreat
    if (liveUrl.includes('@uistforestretreat')) {
      return 'https://www.youtube.com/embed/live_stream?channel=UCMLIrAbhJmZEP4M32R8Ocyg&autoplay=1';
    }

    // For Explore Osprey and Falcons
    if (liveUrl.includes('@ExploreOspreyandFalcons')) {
      return 'https://www.youtube.com/embed/live_stream?channel=UCv0In2Sw_YabIhMHHOoTSkA&autoplay=1';
    }

    // For Stadtverwaltung Bad Salzungen (Stork)
    if (liveUrl.includes('@StadtverwaltungBadSalzungen')) {
      return 'https://www.youtube.com/embed/live_stream?channel=UCzAuBgdr5YC8ARNRMWgIAXg&autoplay=1';
    }

    // For DNA-eV (Stork)
    if (liveUrl.includes('@DNA-eV')) {
      return 'https://www.youtube.com/embed/live_stream?channel=UCTafwp7XV4wG6kL4Dp6iAJQ&autoplay=1';
    }

    // For The Ashgrove Clinic (Peregrine Falcon)
    if (liveUrl.includes('@TheAshgroveClinic')) {
      return 'https://www.youtube.com/embed/live_stream?channel=UCN23mw22ip82ip_XdNCkynQ&autoplay=1';
    }

    // For Cornell Bird Cams
    if (liveUrl.includes('@CornellBirdCams')) {
      return 'https://www.youtube.com/embed/live_stream?channel=UCZXZQxS3d6NpR-eH_gdDwYA&autoplay=1';
    }

    // For Great Lakes Bald Eagle Cam
    if (liveUrl.includes('@GreatLakesBaldEagleCam')) {
      return 'https://www.youtube.com/embed/live_stream?channel=UCob_chLKvtrcg8KE-KpQiig&autoplay=1';
    }

    // For RSPB (Multi-camera)
    if (liveUrl.includes('RSPBvideo')) {
      return 'https://www.youtube.com/embed/live_stream?channel=UCl8QdQ9ZaBT65tF1yOmbMBQ&autoplay=1';
    }

    // For Kotkaklubi (White Stork)
    if (liveUrl.includes('@Kotkaklubi')) {
      return 'https://www.youtube.com/embed/live_stream?channel=UCCvBXTVqksM0wSaqd19N0Sg&autoplay=1';
    }

    // For Explore Penguins and Puffins
    if (liveUrl.includes('@ExplorePenguinsandPuffins')) {
      return 'https://www.youtube.com/embed/live_stream?channel=UCyre4OfIuo5f-3vQ-c9BxzS&autoplay=1';
    }

    // For Faucon Crecerelle (Peregrine Falcon)
    if (liveUrl.includes('@fauconcrecerelle')) {
      return 'https://www.youtube.com/embed/live_stream?channel=UCGjtF72qHEOkEn-9PLf1t7g&autoplay=1';
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
                  onClick={handleOpenModal}
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

            {/* Grid Layout: Banner + Video */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Left Side - Amazon Banner (Vertical) */}
              <div className="hidden md:block md:col-span-3">
                <AmazonModalBanner />
              </div>

              {/* Right Side - Video Player */}
              <div className="md:col-span-9">
                {/* Video Player */}
                <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
              {/* Loading Spinner */}
              {videoLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
                  <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-gray-600 border-t-green-500 mb-4"></div>
                    <p className="text-gray-400 text-sm">Loading live stream...</p>
                  </div>
                </div>
              )}

              <iframe
                className="w-full h-full"
                src={getEmbedUrl()}
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
          </div>
        </div>
      )}
    </>
  );
}
