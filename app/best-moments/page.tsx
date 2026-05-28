'use client';

import Link from 'next/link';
import FeaturedVideoCard from '@/components/FeaturedVideoCard';
import VideoCard from '@/components/VideoCard';

export default function BestMomentsPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-dove text-white text-xl"></i>
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-tight">Birds by Feather</div>
                <div className="text-green-400 text-xs">Live Nest Cameras</div>
              </div>
            </Link>
            <nav className="flex gap-6">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors font-medium flex items-center gap-2">
                <i className="fa-solid fa-home"></i>
                Home
              </Link>
              <Link href="/best-moments" className="text-white transition-colors font-medium flex items-center gap-2">
                <i className="fa-solid fa-star"></i>
                Best Moments
              </Link>
              <Link href="/#nests" className="text-gray-400 hover:text-white transition-colors font-medium flex items-center gap-2">
                <i className="fa-solid fa-video"></i>
                Nests
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors font-medium">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-6">
              <i className="fa-solid fa-star text-yellow-400"></i>
              <span className="text-yellow-400 font-semibold text-sm">HIGHLIGHTS</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Best Moments From<br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Our Bird Cameras
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
              Relive the most incredible, heartwarming, and exciting moments captured by our network of live bird cameras. From first flights to feeding frenzies, these are nature's best performances.
            </p>
          </div>

          {/* Featured Video */}
          <FeaturedVideoCard
            videoId="IC21xC0Oy6k"
            title="Blue Tit Nest - Egg Hatching to Chicks Fledging"
            description="Watch the complete journey of blue tit chicks from the moment they hatch until they take their first brave flight into the world. This heartwarming video captures the dedication of parent birds as they tirelessly feed and protect their growing family."
            channelName="Nest Cam Live"
            thumbnail="https://i.ytimg.com/vi/IC21xC0Oy6k/maxresdefault.jpg"
          />

          {/* More Videos Grid */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              More Amazing Moments
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <VideoCard
                videoId="XU3JsHS9Dlg"
                title="Osprey Nest - Amazing Fish Deliveries"
                description="Watch ospreys in action as they hunt and deliver fresh fish to their nest. See these incredible raptors demonstrate their amazing fishing skills and parenting dedication."
                channelName="Wildlife Camera"
                thumbnail="https://i.ytimg.com/vi/XU3JsHS9Dlg/hqdefault.jpg"
              />

              {/* Placeholder for more videos */}
              <div className="bg-gray-800/50 border-2 border-dashed border-gray-700 rounded-xl p-8 flex flex-col items-center justify-center min-h-[300px]">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700/50 rounded-full mb-4">
                  <i className="fa-solid fa-video text-gray-500 text-2xl"></i>
                </div>
                <p className="text-gray-500 text-sm text-center">
                  More videos coming soon...
                </p>
              </div>

              <div className="bg-gray-800/50 border-2 border-dashed border-gray-700 rounded-xl p-8 flex flex-col items-center justify-center min-h-[300px]">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700/50 rounded-full mb-4">
                  <i className="fa-solid fa-video text-gray-500 text-2xl"></i>
                </div>
                <p className="text-gray-500 text-sm text-center">
                  More videos coming soon...
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900/50 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-500 text-sm">
            <p>&copy; 2024 Birds by Feather. All rights reserved.</p>
            <p className="mt-2">
              Watch live bird nest cameras and celebrate the wonder of nature.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
