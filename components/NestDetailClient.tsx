'use client';

import { BirdNest } from '@/types/birdnest';
import { useState } from 'react';

interface NestDetailClientProps {
  nest: BirdNest;
}

export default function NestDetailClient({ nest }: NestDetailClientProps) {
  const [selectedCamera, setSelectedCamera] = useState(nest.youtubeId);
  const hasMultipleCameras = nest.cameras && nest.cameras.length > 1;

  return (
    <>
      {/* Video Player */}
      <div className="order-2 lg:order-1">
        {/* Camera Selection */}
        {hasMultipleCameras && (
          <div className="mb-4 flex gap-2">
            {nest.cameras?.map((camera) => (
              <button
                key={camera.id}
                onClick={() => setSelectedCamera(camera.youtubeId)}
                className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  selectedCamera === camera.youtubeId
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
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${selectedCamera}`}
            title={nest.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-semibold">Live Stream</span>
          </div>
          <a
            href={`https://www.youtube.com/watch?v=${selectedCamera}`}
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
