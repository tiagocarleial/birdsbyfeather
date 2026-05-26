'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { birdNests } from '@/data/nests';
import Navigation from '@/components/Navigation';
import BirdNestCard from '@/components/BirdNestCard';
import FilterBar from '@/components/FilterBar';

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function HomePage() {
  const [selectedSpecies, setSelectedSpecies] = useState<string>('all');
  const [randomizedNests, setRandomizedNests] = useState(birdNests.slice(0, 12));

  // Shuffle only on client-side after mount to avoid hydration mismatch
  useEffect(() => {
    setRandomizedNests(shuffleArray(birdNests.slice(0, 12)));
  }, []);

  // Get unique species
  const uniqueSpecies = Array.from(new Set(birdNests.map(nest => nest.species)));

  // Filter nests based on selected species
  const allNests = randomizedNests;
  const featuredNests = selectedSpecies === 'all'
    ? allNests
    : allNests.filter(nest => nest.species === selectedSpecies);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: featuredNests.map((nest, index) => ({
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
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation currentPage="home" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-800 to-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 mb-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-[10px] md:text-xs font-medium">Live Wildlife Cameras • Real-Time Streams</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
              Connect with Nature Through{' '}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Live Bird Cams
              </span>
            </h1>

            <p className="text-xs md:text-sm text-gray-400 mb-4 max-w-2xl mx-auto">
              Watch eagles, owls, and other magnificent birds in their natural habitats. Observe nesting behavior,
              feeding routines, and the circle of life in stunning real-time detail.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-2 justify-center text-[10px] md:text-xs">
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-1.5 flex items-center gap-1.5">
                <span className="font-bold text-green-400">{birdNests.length}+</span>
                <span className="text-gray-400">Live Nests</span>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-1.5 flex items-center gap-1.5">
                <i className="fa-solid fa-dove text-green-400 text-[8px] md:text-xs"></i>
                <span className="text-gray-400">24/7 Streaming</span>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-1.5 flex items-center gap-1.5">
                <i className="fa-solid fa-earth-americas text-blue-400 text-[8px] md:text-xs"></i>
                <span className="text-gray-400">Global Locations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Nests Section */}
      <section className="container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-1 h-10 bg-green-500 rounded-full"></div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Nests</h2>
                  </div>
                  <p className="text-gray-400 text-lg">
                    Watch our most popular live bird nest cameras
                  </p>
                </div>
                <Link href="/nests">
                  <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all inline-flex items-center gap-2">
                    View All Nests
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </Link>
              </div>
            </div>

            {/* Filter Bar */}
            <FilterBar
              species={uniqueSpecies}
              selectedSpecies={selectedSpecies}
              onFilterChange={setSelectedSpecies}
            />

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-400">
                Showing <span className="text-white font-semibold">{featuredNests.length}</span> of{' '}
                <span className="text-white font-semibold">{allNests.length}</span> featured nests
                {selectedSpecies !== 'all' && (
                  <span className="text-green-400"> • Filtered by: {selectedSpecies}</span>
                )}
              </p>
            </div>

            {/* Nests Grid or Empty State */}
            {featuredNests.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredNests.map((nest) => (
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
                  No featured nests match the selected filter
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

      {/* Why Bird Watching Matters Section */}
      <section className="bg-gray-800/30 border-y border-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Bird Watching Matters</h2>
              <p className="text-gray-400 text-lg">
                Connecting with nature through bird watching offers numerous benefits for both individuals and conservation efforts
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-heart text-red-400"></i>
                  Mental Wellbeing
                </h3>
                <p className="text-gray-400">
                  Studies show that watching birds and connecting with nature reduces stress, anxiety,
                  and improves overall mental health. It's mindfulness in action.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-graduation-cap text-blue-400"></i>
                  Education
                </h3>
                <p className="text-gray-400">
                  Live nest cameras provide unparalleled educational opportunities to learn about avian
                  behavior, reproduction, and parenting in ways books never could.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-shield-heart text-green-400"></i>
                  Conservation
                </h3>
                <p className="text-gray-400">
                  By observing these magnificent creatures, we develop a deeper connection that drives
                  conservation efforts and habitat protection for future generations.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-users text-purple-400"></i>
                  Community
                </h3>
                <p className="text-gray-400">
                  Join thousands of bird enthusiasts worldwide who share observations, celebrate hatchings,
                  and mourn losses together in a supportive community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Watch Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What You Can Observe</h2>
            <p className="text-gray-400 text-lg">
              Experience the complete lifecycle of birds in their natural habitat
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:border-green-500 transition-all">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-egg text-green-400 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Nesting & Eggs</h3>
              <p className="text-gray-400">
                Watch as parent birds carefully construct nests and tend to their eggs during incubation
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:border-green-500 transition-all">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-baby text-blue-400 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Hatching & Growth</h3>
              <p className="text-gray-400">
                Witness the miracle of hatching and follow eaglets as they grow from helpless chicks to fledglings
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:border-green-500 transition-all">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-utensils text-yellow-400 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Feeding & Behavior</h3>
              <p className="text-gray-400">
                Observe hunting skills, feeding routines, and the social dynamics between parents and offspring
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Watching Today</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join our community and experience the wonder of nature through live bird nest cameras
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/nests">
              <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-green-600/20">
                Browse All Nests
              </button>
            </Link>
            <Link href="/about">
              <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 rounded-lg font-semibold transition-all transform hover:scale-105">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">© 2026 Birds by Feather - Connecting People with Nature</p>
            <div className="flex gap-6 text-sm">
              <Link href="/about" className="text-gray-500 hover:text-gray-300 transition-colors">About</Link>
              <Link href="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy</Link>
              <Link href="/contact" className="text-gray-500 hover:text-gray-300 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
