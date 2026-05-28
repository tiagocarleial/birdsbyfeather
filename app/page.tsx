'use client';

import { useState } from 'react';
import Link from 'next/link';
import BirdsHomeCam from '@/components/BirdsHomeCam';
import FilterBar from '@/components/FilterBar';

export default function HomePage() {
  const [selectedSpecies, setSelectedSpecies] = useState('all');

  // Define all bird cameras data
  const birdCameras = [
    {
      id: "dale-hollow-eagle",
      number: 1,
      species: "Bald Eagle",
      liveUrl: "https://www.youtube.com/@DaleHollowEagleCamera/live",
      title: "Dale Hollow Eagle Nest",
      description: "Watch majestic bald eagles in their natural habitat. Observe these powerful birds of prey as they nest, hunt, and raise their young.",
      location: "Dale Hollow, USA",
      thumbnail: "https://i.ytimg.com/vi/8aaFcTNcCLA/maxresdefault.jpg",
      channelName: "Dale Hollow Eagle Camera"
    },
    {
      id: "osprey-carnyx",
      number: 2,
      species: "Osprey",
      liveUrl: "https://www.youtube.com/@CarnyxWildTwo/live",
      title: "Osprey Nest Live Cam",
      description: "Watch ospreys, magnificent fish-eating raptors, in their natural habitat. Observe their impressive fishing skills and parenting behaviors.",
      location: "Wildlife Area",
      thumbnail: "https://i.ytimg.com/vi/1JmvBGTkxbE/hqdefault.jpg",
      videoId: "1JmvBGTkxbE",
      channelName: "Carnyx Wild Two"
    },
    {
      id: "garden-birds-nest",
      number: 3,
      species: "Blue Tit",
      liveUrl: "https://www.youtube.com/@NestCamLive/live",
      title: "Blue Tit Nest Cam",
      description: "Watch beautiful blue tits in their nest box. Observe these colorful, energetic songbirds as they build nests, incubate eggs, and raise their young.",
      location: "Garden Nest Box",
      thumbnail: "https://i.ytimg.com/vi/_8TEuV4qaHo/hqdefault.jpg",
      channelName: "Nest Cam Live"
    },
    {
      id: "forestry-england-osprey",
      number: 4,
      species: "Osprey",
      liveUrl: "https://www.youtube.com/@ForestryEngland/live",
      title: "Forestry England Osprey Nest",
      description: "Watch ospreys in a stunning UK forest setting. Observe these magnificent fish hawks as they raise their young in a nest managed by Forestry England.",
      location: "United Kingdom",
      thumbnail: "https://i.ytimg.com/vi/d2HIkb2BHdw/hq720.jpg",
      videoId: "d2HIkb2BHdw",
      channelName: "Forestry England"
    },
    {
      id: "fobb-bald-eagle",
      number: 5,
      species: "Bald Eagle",
      liveUrl: "https://www.youtube.com/@FOBBVCAM/live",
      title: "FOBB Bald Eagle Nest",
      description: "Watch a magnificent bald eagle pair at their nest. Observe these powerful raptors as they care for their nest, hunt, and raise their eaglets throughout the breeding season.",
      location: "USA",
      thumbnail: "https://i.ytimg.com/vi/B4-L2nfGcuE/hqdefault.jpg",
      videoId: "B4-L2nfGcuE",
      channelName: "FOBBVCAM"
    },
    {
      id: "uist-white-tailed-eagle",
      number: 6,
      species: "White-tailed Eagle",
      liveUrl: "https://www.youtube.com/@uistforestretreat/live",
      title: "Uist White-tailed Eagle Nest",
      description: "Watch the magnificent white-tailed eagles at their nest in Scotland. Observe these impressive sea eagles as they care for their young in the beautiful Scottish Highlands.",
      location: "Scotland, UK",
      thumbnail: "https://i.ytimg.com/vi/aivQQnNPwZ8/hqdefault.jpg",
      videoId: "aivQQnNPwZ8",
      channelName: "Uist Forest Retreat"
    },
    {
      id: "explore-osprey",
      number: 7,
      species: "Osprey",
      liveUrl: "https://www.youtube.com/@ExploreOspreyandFalcons/live",
      title: "Explore Osprey Nest Cam",
      description: "Watch ospreys at their nest through this dedicated wildlife camera. Observe these skilled fish hunters as they raise their young and demonstrate their impressive fishing abilities.",
      location: "Wildlife Area",
      thumbnail: "https://i.ytimg.com/vi/3VVoYO-ZFPE/hqdefault.jpg",
      videoId: "3VVoYO-ZFPE",
      channelName: "Explore Osprey and Falcons"
    },
    {
      id: "bad-salzungen-stork",
      number: 8,
      species: "White Stork",
      liveUrl: "https://www.youtube.com/@StadtverwaltungBadSalzungen/live",
      title: "Bad Salzungen Stork Nest",
      description: "Watch white storks at their nest in Bad Salzungen, Germany. Observe these iconic birds as they raise their young on historic rooftops in this charming German town.",
      location: "Bad Salzungen, Germany",
      thumbnail: "https://i.ytimg.com/vi/Dr5zebXpO-M/hqdefault.jpg",
      videoId: "Dr5zebXpO-M",
      channelName: "Stadtverwaltung Bad Salzungen"
    },
    {
      id: "dna-stork",
      number: 9,
      species: "White Stork",
      liveUrl: "https://www.youtube.com/@DNA-eV/live",
      title: "DNA White Stork Nest",
      description: "Watch white storks at their nest through this DNA conservation camera. Observe these elegant birds in their natural habitat as they nest and raise their young.",
      location: "Germany",
      thumbnail: "https://i.ytimg.com/vi/6IRSJR3KDUY/hqdefault.jpg",
      videoId: "6IRSJR3KDUY",
      channelName: "DNA-eV"
    },
    {
      id: "ashgrove-peregrine",
      number: 10,
      species: "Peregrine Falcon",
      liveUrl: "https://www.youtube.com/@TheAshgroveClinic/live",
      title: "Ashgrove Peregrine Falcon Nest",
      description: "Watch peregrine falcons at their urban nest. Observe the world's fastest birds as they hunt, nest, and raise their young in a city environment.",
      location: "Urban Area",
      thumbnail: "https://i.ytimg.com/vi/TmgP8BhtffE/hqdefault.jpg",
      videoId: "TmgP8BhtffE",
      channelName: "The Ashgrove Clinic"
    },
    {
      id: "cornell-bird-cams",
      number: 11,
      species: "Various Birds",
      liveUrl: "https://www.youtube.com/@CornellBirdCams/live",
      title: "Cornell Bird Cams Live",
      description: "Watch a variety of birds at Cornell Lab of Ornithology's live bird feeders and cams. See different species visiting throughout the day in this world-renowned birding location.",
      location: "Cornell Lab, New York, USA",
      thumbnail: "https://i.ytimg.com/vi/BRNsaDSzpnk/hqdefault.jpg",
      videoId: "BRNsaDSzpnk",
      channelName: "Cornell Bird Cams"
    },
    {
      id: "great-lakes-eagle",
      number: 12,
      species: "Bald Eagle",
      liveUrl: "https://www.youtube.com/@GreatLakesBaldEagleCam/live",
      title: "Great Lakes Bald Eagle Cam",
      description: "Watch bald eagles at their nest near the Great Lakes. Observe these magnificent raptors as they nest, hunt, and raise their young in this pristine northern habitat.",
      location: "Great Lakes Region, USA",
      thumbnail: "https://i.ytimg.com/vi/pUHXFVYn0-E/hqdefault.jpg",
      videoId: "pUHXFVYn0-E",
      channelName: "Great Lakes Bald Eagle Cam"
    },
    {
      id: "rspb-multi-camera",
      number: 13,
      species: "Multi-Camera",
      liveUrl: "https://www.youtube.com/RSPBvideo/live",
      title: "RSPB Multi-Camera Feed",
      description: "Watch multiple bird species from RSPB's live camera network. Features swift, osprey, goshawk, and goldeneye nests. Switch between different nest cameras to observe various birds in their natural habitats.",
      location: "United Kingdom",
      thumbnail: "https://i.ytimg.com/vi/3VVoYO-ZFPE/hqdefault.jpg",
      videoId: "eAaBgV2kgro",
      channelName: "RSPBvideo"
    },
    {
      id: "kotkaklubi-stork",
      number: 14,
      species: "White Stork",
      liveUrl: "https://www.youtube.com/@Kotkaklubi/live",
      title: "Kotkaklubi White Stork Nest",
      description: "Watch white storks at their nest in Estonia. Kotkaklubi (Eagle Club) has been running live cameras on protected bird species nests since 2007, providing a unique window into the lives of these magnificent birds.",
      location: "Estonia",
      thumbnail: "https://i.ytimg.com/vi/ldThVtNVYJQ/hqdefault.jpg",
      videoId: "qbkEpXowA2o",
      channelName: "Kotkaklubi"
    },
    {
      id: "kotkaklubi-various",
      number: 15,
      species: "Various Birds",
      liveUrl: "https://www.youtube.com/@Kotkaklubi/live",
      title: "Kotkaklubi Multi-Species Cameras",
      description: "Watch multiple bird species from Kotkaklubi's camera network in Estonia. Features live cameras on eagles (white-tailed, spotted, golden), ospreys, and storks. Experience diverse Estonian wildlife from one premier conservation organization.",
      location: "Estonia",
      thumbnail: "https://i.ytimg.com/vi/7uUmdtXSgwU/hqdefault.jpg",
      videoId: "qbkEpXowA2o",
      channelName: "Kotkaklubi"
    },
    {
      id: "explore-penguins-puffins",
      number: 16,
      species: "Various Birds",
      liveUrl: "https://www.youtube.com/@ExplorePenguinsandPuffins/live",
      title: "Explore Penguins and Puffins",
      description: "Watch penguins and puffins through Explore.org's live camera network. Observe these charming seabirds in their natural habitats, featuring both Antarctic penguins and Atlantic puffins from various locations around the world.",
      location: "Multiple Locations",
      thumbnail: "https://i.ytimg.com/vi/sWQtnUoBy1w/hqdefault.jpg",
      videoId: "F5yLGZp5nsA",
      channelName: "Explore Penguins and Puffins"
    },
    {
      id: "faucon-crecerelle",
      number: 17,
      species: "Peregrine Falcon",
      liveUrl: "https://www.youtube.com/@fauconcrecerelle/live",
      title: "Faucon Crécerelle Nest Cam",
      description: "Watch peregrine falcons at their nest through this French wildlife camera. Observe these incredible aerial hunters as they hunt, nest, and raise their young with stunning detail and expert monitoring.",
      location: "France",
      thumbnail: "https://i.ytimg.com/vi/TmgP8BhtffE/hqdefault.jpg",
      videoId: "DSQxEryTLw8",
      channelName: "Faucon Crécerelle"
    }
  ];

  // Get unique species for filter
  const uniqueSpecies = Array.from(new Set(birdCameras.map(cam => cam.species))).sort();

  // Filter cameras based on selected species
  const filteredCameras = selectedSpecies === 'all'
    ? birdCameras
    : birdCameras.filter(cam => cam.species === selectedSpecies);

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
          <div id="nests" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-semibold text-sm">LIVE NOW</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Watch Nature's Most<br />
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Beautiful Moments
              </span>
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Experience the wonder of wildlife from your home. Watch magnificent birds build nests,
              raise their young, and thrive in their natural habitat—all streaming live, 24/7.
            </p>

            <div className="flex items-center justify-center gap-8 mt-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-circle-play text-green-500"></i>
                <span>24/7 Live Streams</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-globe text-blue-500"></i>
                <span>Multiple Locations</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-hd-video text-purple-500"></i>
                <span>HD Quality</span>
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <FilterBar
            species={uniqueSpecies}
            selectedSpecies={selectedSpecies}
            onFilterChange={setSelectedSpecies}
          />

          {/* Bird Camera Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCameras.map((camera) => (
              <BirdsHomeCam
                key={camera.id}
                id={camera.id}
                number={camera.number}
                species={camera.species}
                liveUrl={camera.liveUrl}
                title={camera.title}
                description={camera.description}
                location={camera.location}
                thumbnail={camera.thumbnail}
                videoId={camera.videoId}
                channelName={camera.channelName}
              />
            ))}
          </div>

          {/* No Results Message */}
          {filteredCameras.length === 0 && (
            <div className="text-center py-16">
              <i className="fa-solid fa-search text-gray-600 text-5xl mb-4"></i>
              <p className="text-gray-400 text-lg">No bird cameras found for this species.</p>
            </div>
          )}
        </div>
      </main>

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
