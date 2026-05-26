'use client';

import { useState } from 'react';
import { birdNests } from '@/data/nests';
import Navigation from '@/components/Navigation';
import BirdNestCard from '@/components/BirdNestCard';
import FilterBar from '@/components/FilterBar';

export default function NestsPage() {
  const [selectedSpecies, setSelectedSpecies] = useState<string>('all');

  // Get unique species
  const uniqueSpecies = Array.from(new Set(birdNests.map(nest => nest.species)));

  // Filter nests based on selected species
  const filteredNests = selectedSpecies === 'all'
    ? birdNests
    : birdNests.filter(nest => nest.species === selectedSpecies);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Live Bird Nest Cameras',
    description: 'Explore our collection of live bird nest cameras from around the world. Watch eagles, owls, and other magnificent birds in real-time.',
    url: 'https://birdsbyfeather.com/nests',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: filteredNests.length,
      itemListElement: filteredNests.map((nest, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'VideoObject',
          name: nest.name,
          description: nest.description,
          thumbnailUrl: nest.thumbnail || `https://i.ytimg.com/vi/${nest.youtubeId}/maxresdefault.jpg`,
          contentUrl: `https://www.youtube.com/watch?v=${nest.youtubeId}`,
          embedUrl: `https://www.youtube.com/embed/${nest.youtubeId}`,
          url: `https://birdsbyfeather.com/nest/${nest.id}`,
        },
      })),
    },
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation currentPage="nests" />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-800 to-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-3 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-xs md:text-sm font-medium">
                {filteredNests.length} {filteredNests.length === 1 ? 'Nest' : 'Nests'} Available
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Live Bird Nest{' '}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Cameras
              </span>
            </h1>

            <p className="text-sm md:text-lg text-gray-400">
              Explore our collection of live bird nest cameras from around the world.
              Watch eagles, owls, and other magnificent birds in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Nests Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Filter Bar */}
          <FilterBar
            species={uniqueSpecies}
            selectedSpecies={selectedSpecies}
            onFilterChange={setSelectedSpecies}
          />

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-400">
              Showing <span className="text-white font-semibold">{filteredNests.length}</span> of{' '}
              <span className="text-white font-semibold">{birdNests.length}</span> nests
              {selectedSpecies !== 'all' && (
                <span className="text-green-400"> • Filtered by: {selectedSpecies}</span>
              )}
            </p>
          </div>

          {/* Nests Grid */}
          {filteredNests.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNests.map((nest) => (
                <BirdNestCard key={nest.id} nest={nest} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-dove text-gray-600 text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No Nests Found</h3>
              <p className="text-gray-400 mb-6">
                Try selecting a different species filter
              </p>
              <button
                onClick={() => setSelectedSpecies('all')}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all"
              >
                Show All Nests
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-gray-800/30 border-y border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">About Our Cameras</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-video text-green-400"></i>
                  24/7 Live Streaming
                </h3>
                <p className="text-gray-400">
                  All our cameras stream continuously, giving you the opportunity to observe natural
                  bird behavior at any time of day or night.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-shield-heart text-blue-400"></i>
                  Non-Invasive Monitoring
                </h3>
                <p className="text-gray-400">
                  Our cameras are carefully positioned to minimize disturbance while providing
                  excellent views of nesting activities.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-graduation-cap text-yellow-400"></i>
                  Educational Value
                </h3>
                <p className="text-gray-400">
                  Perfect for students, researchers, and bird enthusiasts to learn about avian
                  behavior, reproduction, and development.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-users text-purple-400"></i>
                  Community Driven
                </h3>
                <p className="text-gray-400">
                  Join thousands of viewers sharing observations and celebrating milestones together
                  in our growing bird watching community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">© 2026 Birds by Feather - Connecting People with Nature</p>
            <div className="flex gap-6 text-sm">
              <a href="/about" className="text-gray-500 hover:text-gray-300 transition-colors">About</a>
              <a href="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy</a>
              <a href="/contact" className="text-gray-500 hover:text-gray-300 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
