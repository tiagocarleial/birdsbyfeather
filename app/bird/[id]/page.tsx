'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

// Bird data type
type BirdData = {
  id: string;
  number: number;
  species: string;
  liveUrl: string;
  title: string;
  description: string;
  fullDescription: string;
  location: string;
  thumbnail: string;
  channelName: string;
  videoId?: string;
  aboutSpecies: string;
  habitat: string;
  behavior: string;
  bestTime: string;
  whatToWatch: string[];
};

// Bird data - in a real app, this would come from a database or API
const birdsData: Record<string, BirdData> = {
  'dale-hollow-eagle': {
    id: 'dale-hollow-eagle',
    number: 1,
    species: 'Bald Eagle',
    liveUrl: 'https://www.youtube.com/@DaleHollowEagleCamera/live',
    title: 'Dale Hollow Eagle Nest',
    description: 'Watch majestic bald eagles in their natural habitat. Observe these powerful birds of prey as they nest, hunt, and raise their young.',
    fullDescription: 'Experience the daily life of a bald eagle family in Dale Hollow. This live camera provides an intimate view of one of nature\'s most majestic birds. Watch as eagles build and maintain their massive nests, hunt for fish, and raise their young from eggs to fledglings.',
    location: 'Dale Hollow, USA',
    thumbnail: 'https://i.ytimg.com/vi/8aaFcTNcCLA/maxresdefault.jpg',
    channelName: 'Dale Hollow Eagle Camera',
    videoId: undefined,
    aboutSpecies: 'Bald eagles are large birds of prey found in North America. They are known for their distinctive white head and tail feathers, powerful build, and impressive wingspan of up to 7.5 feet. These magnificent raptors are skilled hunters and fishers.',
    habitat: 'Bald eagles typically nest near large bodies of water with abundant fish populations. They build massive nests in tall trees, often returning to the same nest year after year, adding to it each season.',
    behavior: 'Eagles are devoted parents, with both male and female sharing incubation and feeding duties. They hunt primarily for fish but will also take waterfowl and small mammals. Their eyesight is 4-8 times sharper than humans.',
    bestTime: 'Early morning and late afternoon are the most active times. During breeding season (January-July), you can observe nest building, egg incubation, and feeding of eaglets.',
    whatToWatch: [
      'Eagles bringing fish to the nest',
      'Parent eagles taking turns on the nest',
      'Eaglets growing and developing',
      'Territorial displays and vocalizations',
      'Nest maintenance and building',
    ],
  },
  'osprey-carnyx': {
    id: 'osprey-carnyx',
    number: 2,
    species: 'Osprey',
    liveUrl: 'https://www.youtube.com/@CarnyxWildTwo/live',
    title: 'Osprey Nest Live Cam',
    description: 'Watch ospreys, magnificent fish-eating raptors, in their natural habitat. Observe their impressive fishing skills and parenting behaviors.',
    fullDescription: 'Observe the fascinating world of ospreys through this live camera. These skilled fish hawks demonstrate incredible hunting abilities, diving feet-first into water to catch fish. Watch the complete nesting cycle from pair bonding to fledging.',
    location: 'Wildlife Area',
    thumbnail: 'https://i.ytimg.com/vi/1JmvBGTkxbE/hqdefault.jpg',
    channelName: 'Carnyx Wild Two',
    videoId: '1JmvBGTkxbE',
    aboutSpecies: 'Ospreys are large raptors that feed almost exclusively on fish. They have reversible outer toes, sharp spines on their feet, and closeable nostrils - all adaptations for catching and holding slippery fish. Their wingspan reaches up to 6 feet.',
    habitat: 'Ospreys nest near rivers, lakes, and coastal areas where fish are plentiful. They build large stick nests on top of dead trees, telephone poles, or artificial platforms. Many pairs return to the same nest site year after year.',
    behavior: 'Ospreys are spectacular hunters, hovering 30-100 feet above water before plunging feet-first to catch fish. They can dive completely underwater and emerge with prey. Both parents share nest duties, with males doing most of the hunting.',
    bestTime: 'Morning hours (6-10 AM) are prime fishing time. During breeding season (March-August), you can observe courtship displays, nest building, incubation, and chick rearing.',
    whatToWatch: [
      'Dramatic fishing dives',
      'Fish delivery to nest',
      'Chick feeding behaviors',
      'Nest defense against intruders',
      'Fledglings learning to fly',
    ],
  },
  'garden-birds-nest': {
    id: 'garden-birds-nest',
    number: 3,
    species: 'Blue Tit',
    liveUrl: 'https://www.youtube.com/@NestCamLive/live',
    title: 'Blue Tit Nest Cam',
    description: 'Watch beautiful blue tits in their nest box. Observe these colorful, energetic songbirds as they build nests, incubate eggs, and raise their young.',
    fullDescription: 'Get an intimate look at blue tits as they nest, raise their young, and go about their daily lives in this cozy nest box. These vibrant little songbirds are among the most beloved garden visitors. This camera provides a unique window into the private world of blue tits throughout the breeding season, from nest building to fledging.',
    location: 'Garden Nest Box',
    thumbnail: 'https://i.ytimg.com/vi/_8TEuV4qaHo/hqdefault.jpg',
    channelName: 'Nest Cam Live',
    videoId: undefined,
    aboutSpecies: 'Blue tits are small, colorful songbirds with distinctive blue and yellow plumage. They measure about 12cm in length and weigh only 11 grams. These acrobatic birds are cavity nesters that readily use nest boxes. They are intelligent, curious, and play a vital role in controlling caterpillar and insect populations in gardens and woodlands.',
    habitat: 'Blue tits thrive in gardens, parks, and deciduous woodlands across Europe. They prefer nest boxes or natural tree cavities with small entrance holes that exclude larger competitors. A good habitat includes mature trees, native plants, water sources, and abundant insects for feeding their young.',
    behavior: 'Blue tits are incredibly active parents, making 100+ feeding trips per day during peak chick rearing. They consume vast quantities of caterpillars, with a single brood eating thousands of caterpillars before fledging. Both parents share nest building and feeding duties. These acrobatic birds are known for their ability to hang upside down while foraging.',
    bestTime: 'Active throughout the day, with peak feeding times in early morning (6-9 AM) and late afternoon (4-7 PM). Breeding season runs from April to July. Nest building begins in April, egg laying in late April/May, with chicks fledging in June.',
    whatToWatch: [
      'Intricate nest building with moss, feathers, and hair',
      'Egg laying (typically 7-12 eggs)',
      'Frequent feeding visits with caterpillars',
      'Rapid chick development from hatching to fledging',
      'Parent birds removing fecal sacs to keep nest clean',
    ],
  },
  'forestry-england-osprey': {
    id: 'forestry-england-osprey',
    number: 4,
    species: 'Osprey',
    liveUrl: 'https://www.youtube.com/@ForestryEngland/live',
    title: 'Forestry England Osprey Nest',
    description: 'Watch ospreys in a stunning UK forest setting. Observe these magnificent fish hawks as they raise their young in a nest managed by Forestry England.',
    fullDescription: 'Experience the remarkable return of ospreys to England through this live camera in a managed forest nest site. Forestry England has created the perfect habitat for these magnificent raptors to thrive. Watch the complete breeding cycle from nest preparation to fledging in one of the UK\'s most successful osprey conservation sites.',
    location: 'United Kingdom',
    thumbnail: 'https://i.ytimg.com/vi/d2HIkb2BHdw/hq720.jpg',
    channelName: 'Forestry England',
    videoId: 'd2HIkb2BHdw',
    aboutSpecies: 'Ospreys are large fish-eating raptors with a wingspan of up to 6 feet. They have unique adaptations including reversible outer toes, spiny foot pads for gripping slippery fish, and closeable nostrils for diving. These remarkable birds migrate thousands of miles between breeding grounds and wintering areas in Africa.',
    habitat: 'In the UK, ospreys nest in forests near lakes, reservoirs, and rivers with abundant fish populations. They build massive stick nests on top of tall trees or artificial platforms. Forestry England manages numerous sites to provide ideal nesting conditions with mature trees and nearby fishing waters.',
    behavior: 'Ospreys are specialist fishers, plunging feet-first into water from heights of 30-100 feet. They can carry fish weighing up to 2kg back to the nest. Both parents share incubation duties, though females do most of the brooding while males hunt. UK ospreys migrate to West Africa for winter, returning to the same nest sites each spring.',
    bestTime: 'Best viewing during UK breeding season (April-August). Morning hours (6-10 AM) are prime for hunting activity. Watch for dramatic arrivals with fish, feeding sessions, and chick development. Migration preparations begin in late August.',
    whatToWatch: [
      'Spectacular fish catches and deliveries',
      'Chick feeding and development',
      'Nest maintenance and material gathering',
      'Territorial defense displays',
      'Flight training and fledging attempts',
    ],
  },
  'fobb-bald-eagle': {
    id: 'fobb-bald-eagle',
    number: 5,
    species: 'Bald Eagle',
    liveUrl: 'https://www.youtube.com/@FOBBVCAM/live',
    title: 'FOBB Bald Eagle Nest',
    description: 'Watch a magnificent bald eagle pair at their nest. Observe these powerful raptors as they care for their nest, hunt, and raise their eaglets throughout the breeding season.',
    fullDescription: 'Watch a dedicated bald eagle pair through this intimate nest camera. This live stream provides an incredible view into the daily lives of these majestic birds. Observe every aspect of the nesting cycle, from courtship and nest building through incubation, hatching, and the growth of eaglets into powerful young eagles ready to take their first flights.',
    location: 'USA',
    thumbnail: 'https://i.ytimg.com/vi/B4-L2nfGcuE/hqdefault.jpg',
    channelName: 'FOBBVCAM',
    videoId: 'B4-L2nfGcuE',
    aboutSpecies: 'Bald eagles are large, powerful raptors and the national symbol of the United States. Adults are unmistakable with their white head and tail contrasting against dark brown body. With a wingspan reaching 7.5 feet and weighing 10-14 pounds, these birds are formidable hunters. Their eyesight is 4-8 times sharper than humans, allowing them to spot prey from great distances.',
    habitat: 'Bald eagles prefer habitats near coastlines, rivers, and large lakes where fish are abundant. They build enormous nests in tall, sturdy trees with clear views of water. These nests can weigh over 2,000 pounds and are often reused and expanded each year. Eagles choose nest sites that provide easy flight access and proximity to prime fishing areas.',
    behavior: 'Bald eagles are skilled hunters, primarily feeding on fish but also taking waterfowl, small mammals, and carrion. They mate for life and perform spectacular courtship flights. Both parents share all nesting duties including incubation (35 days), brooding, and feeding. Parents bring fish to the nest multiple times daily, tearing pieces to feed their young. Eaglets remain in the nest for 10-13 weeks before fledging.',
    bestTime: 'Best viewing varies by season. Winter (December-February): courtship and nest building. Spring (March-May): egg laying, incubation, and hatching. Summer (June-August): chick rearing and fledging. Early morning and late afternoon show peak activity with feeding times.',
    whatToWatch: [
      'Fish deliveries and feeding sessions',
      'Nest maintenance with fresh material',
      'Eaglet development and wing exercises',
      'Parent changeovers during incubation',
      'Fledging attempts and first flights',
    ],
  },
};

// Get embed URL
function getEmbedUrl(liveUrl: string, videoId?: string): string {
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  }

  if (liveUrl.includes('@DaleHollowEagleCamera')) {
    return 'https://www.youtube.com/embed/live_stream?channel=UClW_2-fZBUJbaFPR9OFlSCA&autoplay=1';
  }

  if (liveUrl.includes('@CarnyxWildTwo') || liveUrl.includes('@CarnyxWild')) {
    return 'https://www.youtube.com/embed/live_stream?channel=UCzb2wqPoBecAyANKCD-Jl6A&autoplay=1';
  }

  if (liveUrl.includes('@NestCamLive')) {
    return 'https://www.youtube.com/embed/live_stream?channel=UC99XoaIwg7oS7z-wY25WDKg&autoplay=1';
  }

  if (liveUrl.includes('@ForestryEngland')) {
    return 'https://www.youtube.com/embed/live_stream?channel=UCspfY4rpODprWA_9zeZ_9EQ&autoplay=1';
  }

  if (liveUrl.includes('@FOBBVCAM')) {
    return 'https://www.youtube.com/embed/live_stream?channel=UCsFgbVuhRrPV5FqyN7kOD8g&autoplay=1';
  }

  return liveUrl;
}

export default function BirdDetailPage() {
  const params = useParams();
  const birdId = params.id as string;
  const bird = birdsData[birdId as keyof typeof birdsData];

  // Get channel URL (remove /live from liveUrl)
  const getChannelUrl = (url: string): string => {
    return url.replace('/live', '');
  };

  if (!bird) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Bird Not Found</h1>
          <Link href="/" className="text-green-400 hover:text-green-300">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const embedUrl = getEmbedUrl(bird.liveUrl, bird.videoId);

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
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
          >
            <i className="fa-solid fa-arrow-left"></i>
            Back to Home
          </Link>

          {/* Title Section */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center border border-gray-600">
                <span className="text-gray-300 font-bold">#{bird.number}</span>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">{bird.title}</h1>
                <div className="flex items-center gap-4 text-gray-400">
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-location-dot text-green-500"></i>
                    <span>{bird.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-semibold">Live Now</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-block bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-blue-400 font-medium">
              {bird.species}
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Video Player */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="aspect-video bg-black rounded-xl overflow-hidden border border-gray-700 mb-4">
                  <iframe
                    className="w-full h-full"
                    src={embedUrl}
                    title={bird.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="space-y-4">
                  <a
                    href={bird.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all text-center"
                  >
                    <i className="fa-brands fa-youtube mr-2"></i>
                    Watch on YouTube
                  </a>

                  {/* Attribution Notice */}
                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <i className="fa-brands fa-youtube text-red-500 text-xl"></i>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-400 text-xs leading-relaxed">
                          <span className="font-semibold text-white">Conteúdo Original:</span> Canal{' '}
                          <a
                            href={getChannelUrl(bird.liveUrl)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-400 hover:text-green-300 font-semibold underline"
                          >
                            {bird.channelName}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Information */}
            <div className="lg:col-span-2 space-y-6">
              {/* About This Stream */}
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-circle-info text-green-500"></i>
                  About This Stream
                </h2>
                <p className="text-gray-300 leading-relaxed">{bird.fullDescription}</p>
              </div>

              {/* About the Species */}
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-feather text-blue-400"></i>
                  About {bird.species}
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">{bird.aboutSpecies}</p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <i className="fa-solid fa-tree text-green-400"></i>
                      Habitat
                    </h3>
                    <p className="text-gray-300 text-sm">{bird.habitat}</p>
                  </div>

                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <i className="fa-solid fa-paw text-yellow-400"></i>
                      Behavior
                    </h3>
                    <p className="text-gray-300 text-sm">{bird.behavior}</p>
                  </div>
                </div>
              </div>

              {/* What to Watch */}
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-binoculars text-purple-400"></i>
                  What to Watch For
                </h2>
                <ul className="space-y-2">
                  {bird.whatToWatch.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <i className="fa-solid fa-check text-green-500 mt-1"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best Time to Watch */}
              <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-700/30 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-clock text-green-400"></i>
                  Best Time to Watch
                </h2>
                <p className="text-gray-300 leading-relaxed">{bird.bestTime}</p>
              </div>
            </div>
          </div>
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
