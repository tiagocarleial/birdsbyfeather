'use client';

import { useState, useEffect } from 'react';
import AmazonModalBanner from './AmazonModalBanner';

interface Product {
  name: string;
  asin: string;
  affiliateLink: string;
  imageUrl: string;
  description: string;
  badge: string;
  features: string[];
}

interface FeaturedBirdCard {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoId: string;
}

interface AmazonAffiliateBannerProps {
  product?: Product;
}

/**
 * Amazon Affiliate Product Banner
 * Display-style rectangular banner featuring bird-related products
 */
export default function AmazonAffiliateBanner({ product: customProduct }: AmazonAffiliateBannerProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  // Reset loading state when modal opens
  const handleOpenModal = () => {
    setModalOpen(true);
    setVideoLoading(true);
  };

  // Featured bird cards pool
  const featuredBirds: FeaturedBirdCard[] = [
    {
      id: 'fobb-bald-eagle',
      title: 'FOBB Bald Eagle Nest',
      description: 'Watch eagles raise their young live',
      thumbnail: 'https://i.ytimg.com/vi/B4-L2nfGcuE/hqdefault.jpg',
      videoId: 'B4-L2nfGcuE',
    },
    {
      id: 'dale-hollow-eagle',
      title: 'Dale Hollow Eagle Nest',
      description: 'Majestic bald eagles in natural habitat',
      thumbnail: 'https://i.ytimg.com/vi/8aaFcTNcCLA/maxresdefault.jpg',
      videoId: '8aaFcTNcCLA',
    },
    {
      id: 'uist-white-tailed-eagle',
      title: 'Uist White-tailed Eagle',
      description: 'Sea eagles in Scottish Highlands',
      thumbnail: 'https://i.ytimg.com/vi/aivQQnNPwZ8/hqdefault.jpg',
      videoId: 'aivQQnNPwZ8',
    },
    {
      id: 'cornell-bird-cams',
      title: 'Cornell Bird Cams Live',
      description: 'Variety of birds at Cornell Lab',
      thumbnail: 'https://i.ytimg.com/vi/BRNsaDSzpnk/hqdefault.jpg',
      videoId: 'BRNsaDSzpnk',
    },
    {
      id: 'ashgrove-peregrine',
      title: 'Peregrine Falcon Nest',
      description: "World's fastest birds in action",
      thumbnail: 'https://i.ytimg.com/vi/TmgP8BhtffE/hqdefault.jpg',
      videoId: 'TmgP8BhtffE',
    },
    {
      id: 'forestry-england-osprey',
      title: 'Forestry England Osprey',
      description: 'Fish hawks in UK forest setting',
      thumbnail: 'https://i.ytimg.com/vi/d2HIkb2BHdw/hq720.jpg',
      videoId: 'd2HIkb2BHdw',
    },
  ];

  // Randomize featured bird on component mount (client-side only to avoid hydration mismatch)
  const [randomBird, setRandomBird] = useState(featuredBirds[0]); // Default to first bird for SSR

  useEffect(() => {
    // Set random bird only on client side after hydration
    const randomIndex = Math.floor(Math.random() * featuredBirds.length);
    setRandomBird(featuredBirds[randomIndex]);
  }, []);

  // Default product (Bald Eagle Plushie Set)
  const defaultProduct: Product = {
    name: 'BENINY 4Pcs Bald Eagle Stuffed Animal Set',
    asin: 'B0DJX7V7WL',
    affiliateLink: 'https://www.amazon.com/BENINY-Stuffed-Animal-Eagles-Plushie/dp/B0DJX7V7WL?crid=121VN7GOPU2UD&dib=eyJ2IjoiMSJ9.eArfolrEEflP8NFcMjnN6ziaXwuRAAAZsMLAxJ6q3--2mq09Nh0ZNW39vA8ZEjKH3gREOGAyWwfOgZQHP0_jTXLad841RJcwvhMdlwvQqYK8h6v4X18m-GO7ZJJRHUduOx5yoYg9TikDc51mMr08x140UrferOLBuxRqlIxqTtzgDf69jsTZnQzUKJhdtP_AWU4NlNr99SYP0Yye73bLcUh7n3QJCWN4lX3I88PFTUIA_YjBYi9d3fI7S4hQH5ZSNZZDoxDxkmAR5xafUU2YKbSTSCv2dSzewDFAK5lpRro.ss8jQstXX-N9iHm7xtFxObop-4Nt2dMGLaUr6c6MrNQ&dib_tag=se&keywords=BENINY%2B4Pcs%2BBald%2BEagle%2BStuffed%2BAnimal%2C%2B18%2BInch%2BMommy%2BEagle%2BPlush%2Bwith%2B3%2BBaby%2BChicks%2C%2BStuffed%2BBald%2BEagle%2BPlushie%2BToy%2BGifts%2Bfor%2BKids&nsdOptOutParam=true&qid=1779985743&sprefix=beniny%2B4pcs%2Bbald%2Beagle%2Bstuffed%2Banimal%2C%2B18%2Binch%2Bmommy%2Beagle%2Bplush%2Bwith%2B3%2Bbaby%2Bchicks%2C%2Bstuffed%2Bbald%2Beagle%2Bplushie%2Btoy%2Bgifts%2Bfor%2Bkids%2Caps%2C308&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=tiagoolivei07-20&linkId=e437b5c73187a573eb21283c7875f1e0&language=en_US&ref_=as_li_ss_tl',
    imageUrl: 'https://m.media-amazon.com/images/I/71pyYE98R5L._AC_SL1500_.jpg',
    description: '18" Mommy Eagle Plush with 3 Baby Chicks - Perfect gift for kids and bird enthusiasts',
    badge: 'Family Set',
    features: ['4 Pieces Total', 'Soft & Cuddly', 'Great Gift Idea'],
  };

  const product = customProduct || defaultProduct;

  return (
    <section className="bg-gray-900 py-3 md:py-4">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Grid Container */}
          <div className="grid md:grid-cols-12 gap-4">
            {/* Left Side - Featured Bird Cam Card */}
            <div className="md:col-span-4">
              <div onClick={handleOpenModal} className="cursor-pointer">
                <div className="bg-gray-800 border-2 border-green-500/30 rounded-xl overflow-hidden hover:border-green-500/60 transition-all duration-300 h-full">
                  {/* Featured Badge */}
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-3 py-2 text-center">
                    <p className="text-white text-xs font-bold flex items-center justify-center gap-2">
                      <i className="fa-solid fa-video"></i>
                      <span>WATCH LIVE BIRDS</span>
                    </p>
                  </div>

                  {/* Thumbnail */}
                  <div className="relative aspect-video">
                    <img
                      src={randomBird.thumbnail}
                      alt={randomBird.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <div className="bg-red-600 px-2 py-1 rounded-md flex items-center gap-1.5 text-white text-xs font-semibold">
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                        LIVE
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-3">
                    <h3 className="text-white font-bold text-sm mb-1">{randomBird.title}</h3>
                    <p className="text-gray-400 text-xs mb-2">{randomBird.description}</p>
                    <div className="inline-flex items-center gap-1 text-green-400 text-xs font-semibold">
                      <span>Watch Now</span>
                      <i className="fa-solid fa-arrow-right text-[10px]"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Amazon Banner */}
            <div className="md:col-span-8">
              <a
                href={product.affiliateLink}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="block"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div
                  className={`
                    relative bg-gradient-to-br from-gray-800 to-gray-900
                    border-2 border-green-500/30 rounded-xl overflow-hidden
                    transition-all duration-300 shadow-lg
                    min-h-[180px] md:min-h-[200px]
                    ${isHovered ? 'border-green-500/60 shadow-2xl shadow-green-500/20 scale-[1.01]' : ''}
                  `}
                >
                  {/* Badge */}
                  <div className="absolute top-2 left-2 md:top-3 md:left-3 z-10">
                    <div className="bg-green-500 text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-bold flex items-center gap-1">
                      <i className="fa-solid fa-star text-[8px] md:text-xs"></i>
                      <span>{product.badge}</span>
                    </div>
                  </div>

                  {/* Amazon Logo */}
                  <div className="absolute top-2 right-2 md:top-3 md:right-3 z-10">
                    <div className="bg-white px-2 py-1 md:px-3 md:py-1.5 rounded-md md:rounded-lg shadow-lg">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/960px-Amazon_logo.svg.png"
                        alt="Amazon"
                        className="h-3 md:h-4 w-auto"
                      />
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid md:grid-cols-5 gap-3 md:gap-4 p-4 md:p-5">
                    {/* Product Image - Left Side */}
                    <div className="md:col-span-2 flex items-center justify-center">
                      <div className="relative">
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className={`
                            w-full h-auto max-w-[140px] md:max-w-[180px] mx-auto
                            transition-transform duration-300
                            ${isHovered ? 'scale-110' : 'scale-100'}
                          `}
                        />
                      </div>
                    </div>

                    {/* Product Details - Right Side */}
                    <div className="md:col-span-3 flex flex-col justify-center gap-2 md:gap-3">
                      {/* Product Name */}
                      <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                        {product.name}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 text-xs md:text-sm">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-1.5">
                        {product.features.map((feature, index) => (
                          <div
                            key={index}
                            className={`
                              ${index === 0 ? 'bg-blue-500/20 border-blue-500/40 text-blue-300' : ''}
                              ${index === 1 ? 'bg-purple-500/20 border-purple-500/40 text-purple-300' : ''}
                              ${index === 2 ? 'bg-green-500/20 border-green-500/40 text-green-300' : ''}
                              border rounded-md px-2 py-0.5 md:px-2.5 md:py-1 text-[10px] md:text-xs font-medium flex items-center gap-1
                            `}
                          >
                            <i className={`fa-solid ${index === 0 ? 'fa-box' : index === 1 ? 'fa-heart' : 'fa-gift'} text-[8px] md:text-xs`}></i>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div className="mt-1">
                        <div
                          className={`
                            inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-lg
                            bg-gradient-to-r from-green-500 to-emerald-500
                            text-white font-bold text-sm md:text-base
                            transition-all duration-300
                            ${isHovered ? 'shadow-lg shadow-green-500/50 scale-105' : 'shadow-md'}
                          `}
                        >
                          <span>View on Amazon</span>
                          <i className={`fa-solid fa-arrow-right text-xs transition-transform ${isHovered ? 'translate-x-1' : ''}`}></i>
                        </div>
                      </div>

                      {/* Prime Badge */}
                      <div className="flex items-center gap-1.5 text-blue-400 text-[10px] md:text-xs">
                        <i className="fa-solid fa-shipping-fast"></i>
                        <span className="font-medium">Eligible for Amazon Prime</span>
                      </div>
                    </div>
                  </div>

                  {/* Glow Effect on Hover */}
                  <div
                    className={`
                      absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-green-500/0
                      transition-opacity duration-300 pointer-events-none
                      ${isHovered ? 'opacity-100' : 'opacity-0'}
                    `}
                  ></div>
                </div>
              </a>

              {/* Disclaimer */}
              <p className="text-center text-gray-500 text-[10px] md:text-xs mt-2">
                As an Amazon Associate, we earn from qualifying purchases. Price and availability subject to change.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Featured Bird */}
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
                    src={`https://www.youtube.com/embed/${randomBird.videoId}?autoplay=1`}
                    title={randomBird.title}
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
                      href={`https://www.youtube.com/watch?v=${randomBird.videoId}`}
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
                          <span className="font-semibold text-white">Conteúdo Original:</span> Esta transmissão ao vivo pertence e é operada pelo respectivo canal no YouTube. Não estamos copiando ou redistribuindo o conteúdo - apenas exibindo a transmissão pública original diretamente da fonte.
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
    </section>
  );
}
