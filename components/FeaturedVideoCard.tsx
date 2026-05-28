'use client';

import { useState } from 'react';
import AmazonModalBanner from './AmazonModalBanner';

interface FeaturedVideoCardProps {
  videoId: string;
  title: string;
  description: string;
  channelName: string;
  thumbnail: string;
}

export default function FeaturedVideoCard({
  videoId,
  title,
  description,
  channelName,
  thumbnail,
}: FeaturedVideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  // Reset loading state when modal opens
  const handleOpenModal = () => {
    setModalOpen(true);
    setVideoLoading(true);
  };

  return (
    <section className="bg-gray-900 py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Featured Badge */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-2">
              <i className="fa-solid fa-star text-yellow-400"></i>
              <span className="text-yellow-400 font-semibold text-sm">FEATURED VIDEO</span>
            </div>
          </div>

          {/* Grid Container */}
          <div className="grid md:grid-cols-12 gap-6">
            {/* Left Side - Featured Video Card */}
            <div className="md:col-span-8">
              <div
                onClick={handleOpenModal}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="block cursor-pointer"
              >
                <div
                  className={`
                    relative bg-gradient-to-br from-gray-800 to-gray-900
                    border-2 border-yellow-500/30 rounded-xl overflow-hidden
                    transition-all duration-300 shadow-lg
                    ${isHovered ? 'border-yellow-500/60 shadow-2xl shadow-yellow-500/20 scale-[1.01]' : ''}
                  `}
                >
                  {/* Featured Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <div className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <i className="fa-solid fa-star text-xs"></i>
                      <span>Featured</span>
                    </div>
                  </div>

                  {/* YouTube Logo */}
                  <div className="absolute top-3 right-3 z-10">
                    <div className="bg-red-600 px-3 py-1.5 rounded-md shadow-lg">
                      <i className="fa-brands fa-youtube text-white text-xl"></i>
                    </div>
                  </div>

                  {/* Video Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={thumbnail}
                      alt={title}
                      className={`
                        w-full h-full object-cover
                        transition-transform duration-300
                        ${isHovered ? 'scale-105' : 'scale-100'}
                      `}
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <div
                        className={`
                          w-20 h-20 bg-red-600 rounded-full flex items-center justify-center
                          transition-all duration-300
                          ${isHovered ? 'scale-110 bg-red-500' : 'scale-100'}
                        `}
                      >
                        <i className="fa-solid fa-play text-white text-2xl ml-1"></i>
                      </div>
                    </div>
                  </div>

                  {/* Video Details */}
                  <div className="p-6">
                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                      {title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-300 text-sm md:text-base mb-4 line-clamp-2">
                      {description}
                    </p>

                    {/* Channel Info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <i className="fa-brands fa-youtube text-red-500"></i>
                        <span className="text-gray-400 text-sm font-medium">{channelName}</span>
                      </div>

                      <div
                        className={`
                          flex items-center gap-2 px-4 py-2 rounded-lg
                          bg-gradient-to-r from-red-600 to-red-500
                          text-white font-bold text-sm
                          transition-all duration-300
                          ${isHovered ? 'shadow-lg shadow-red-500/50 scale-105' : 'shadow-md'}
                        `}
                      >
                        <span>Watch Now</span>
                        <i className={`fa-solid fa-play text-xs transition-transform ${isHovered ? 'translate-x-1' : ''}`}></i>
                      </div>
                    </div>
                  </div>

                  {/* Glow Effect on Hover */}
                  <div
                    className={`
                      absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/5 to-yellow-500/0
                      transition-opacity duration-300 pointer-events-none
                      ${isHovered ? 'opacity-100' : 'opacity-0'}
                    `}
                  ></div>
                </div>
              </div>
            </div>

            {/* Right Side - Amazon Banner */}
            <div className="md:col-span-4">
              <div className="sticky top-24">
                {/* Vertical Amazon Product Card */}
                <a
                  href="https://www.amazon.com/BENINY-Stuffed-Animal-Eagles-Plushie/dp/B0DJX7V7WL?crid=121VN7GOPU2UD&dib=eyJ2IjoiMSJ9.eArfolrEEflP8NFcMjnN6ziaXwuRAAAZsMLAxJ6q3--2mq09Nh0ZNW39vA8ZEjKH3gREOGAyWwfOgZQHP0_jTXLad841RJcwvhMdlwvQqYK8h6v4X18m-GO7ZJJRHUduOx5yoYg9TikDc51mMr08x140UrferOLBuxRqlIxqTtzgDf69jsTZnQzUKJhdtP_AWU4NlNr99SYP0Yye73bLcUh7n3QJCWN4lX3I88PFTUIA_YjBYi9d3fI7S4hQH5ZSNZZDoxDxkmAR5xafUU2YKbSTSCv2dSzewDFAK5lpRro.ss8jQstXX-N9iHm7xtFxObop-4Nt2dMGLaUr6c6MrNQ&dib_tag=se&keywords=BENINY%2B4Pcs%2BBald%2BEagle%2BStuffed%2BAnimal%2C%2B18%2BInch%2BMommy%2BEagle%2BPlush%2Bwith%2B3%2BBaby%2BChicks%2C%2BStuffed%2BBald%2BEagle%2BPlushie%2BToy%2BGifts%2Bfor%2BKids&nsdOptOutParam=true&qid=1779985743&sprefix=beniny%2B4pcs%2Bbald%2Beagle%2Bstuffed%2Banimal%2C%2B18%2Binch%2Bmommy%2Beagle%2Bplush%2Bwith%2B3%2Bbaby%2Bchicks%2C%2Bstuffed%2Bbald%2Beagle%2Bplushie%2Btoy%2Bgifts%2Bfor%2Bkids%2Caps%2C308&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=tiagoolivei07-20&linkId=e437b5c73187a573eb21283c7875f1e0&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="block"
                >
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-green-500/30 rounded-xl overflow-hidden transition-all duration-300 shadow-lg hover:border-green-500/60 hover:shadow-2xl hover:shadow-green-500/20 h-full flex flex-col">
                    {/* Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <i className="fa-solid fa-star text-xs"></i>
                        <span>Popular</span>
                      </div>
                    </div>

                    {/* Amazon Logo */}
                    <div className="absolute top-3 right-3 z-10">
                      <div className="bg-white px-3 py-1.5 rounded-md shadow-lg">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/960px-Amazon_logo.svg.png"
                          alt="Amazon"
                          className="h-4 w-auto"
                        />
                      </div>
                    </div>

                    {/* Product Image */}
                    <div className="flex items-center justify-center p-8 pt-16 pb-6">
                      <img
                        src="https://m.media-amazon.com/images/I/71pyYE98R5L._AC_SL1500_.jpg"
                        alt="BENINY Bald Eagle Plush Set"
                        className="w-full h-auto max-w-[240px] mx-auto"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 flex flex-col justify-end p-6 pt-2 gap-3">
                      {/* Product Name */}
                      <h3 className="text-xl font-bold text-white leading-tight text-center">
                        BENINY Bald Eagle Plush Set
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 text-sm text-center">
                        18" Mommy Eagle with 3 Baby Chicks - Perfect gift for bird lovers
                      </p>

                      {/* Features */}
                      <div className="flex flex-col gap-2">
                        <div className="bg-blue-500/20 border border-blue-500/40 rounded-md px-3 py-2 text-blue-300 text-sm font-medium flex items-center justify-center gap-2">
                          <i className="fa-solid fa-box text-xs"></i>
                          <span>4 Pieces Total</span>
                        </div>
                        <div className="bg-purple-500/20 border border-purple-500/40 rounded-md px-3 py-2 text-purple-300 text-sm font-medium flex items-center justify-center gap-2">
                          <i className="fa-solid fa-heart text-xs"></i>
                          <span>Soft & Cuddly</span>
                        </div>
                        <div className="bg-green-500/20 border border-green-500/40 rounded-md px-3 py-2 text-green-300 text-sm font-medium flex items-center justify-center gap-2">
                          <i className="fa-solid fa-gift text-xs"></i>
                          <span>Great Gift</span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-2">
                        <div className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-base transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 hover:scale-105 shadow-md">
                          <span>View on Amazon</span>
                          <i className="fa-solid fa-arrow-right text-sm"></i>
                        </div>
                      </div>

                      {/* Prime Badge */}
                      <div className="flex items-center justify-center gap-2 text-blue-400 text-xs mt-2">
                        <i className="fa-solid fa-shipping-fast"></i>
                        <span className="font-medium">Prime Eligible</span>
                      </div>
                    </div>
                  </div>
                </a>

                {/* Disclaimer */}
                <p className="text-center text-gray-500 text-xs mt-3">
                  As an Amazon Associate, we earn from qualifying purchases.
                </p>
              </div>
            </div>
          </div>
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
                        <p className="text-gray-400 text-sm">Loading video...</p>
                      </div>
                    </div>
                  )}

                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
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
                      <i className="fa-brands fa-youtube text-red-500"></i>
                      <span className="text-white font-semibold">{title}</span>
                    </div>
                    <a
                      href={`https://www.youtube.com/watch?v=${videoId}`}
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
                          <span className="font-semibold text-white">Original Content:</span> This video belongs to and is operated by{' '}
                          <span className="text-green-400 font-semibold">{channelName}</span>
                          {' '}on YouTube. We are not copying or redistributing the content - just displaying the original public video directly from the source.
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
