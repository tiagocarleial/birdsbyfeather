'use client';

import { useState } from 'react';

interface Product {
  name: string;
  asin: string;
  affiliateLink: string;
  imageUrl: string;
  description: string;
  badge: string;
}

/**
 * Vertical Amazon Affiliate Banner for Modal
 * Compact vertical design optimized for modal sidebar
 */
export default function AmazonModalBanner() {
  const [isHovered, setIsHovered] = useState(false);

  const product: Product = {
    name: 'BENINY Bald Eagle Plush Set',
    asin: 'B0DJX7V7WL',
    affiliateLink: 'https://www.amazon.com/BENINY-Stuffed-Animal-Eagles-Plushie/dp/B0DJX7V7WL?crid=121VN7GOPU2UD&dib=eyJ2IjoiMSJ9.eArfolrEEflP8NFcMjnN6ziaXwuRAAAZsMLAxJ6q3--2mq09Nh0ZNW39vA8ZEjKH3gREOGAyWwfOgZQHP0_jTXLad841RJcwvhMdlwvQqYK8h6v4X18m-GO7ZJJRHUduOx5yoYg9TikDc51mMr08x140UrferOLBuxRqlIxqTtzgDf69jsTZnQzUKJhdtP_AWU4NlNr99SYP0Yye73bLcUh7n3QJCWN4lX3I88PFTUIA_YjBYi9d3fI7S4hQH5ZSNZZDoxDxkmAR5xafUU2YKbSTSCv2dSzewDFAK5lpRro.ss8jQstXX-N9iHm7xtFxObop-4Nt2dMGLaUr6c6MrNQ&dib_tag=se&keywords=BENINY%2B4Pcs%2BBald%2BEagle%2BStuffed%2BAnimal%2C%2B18%2BInch%2BMommy%2BEagle%2BPlush%2Bwith%2B3%2BBaby%2BChicks%2C%2BStuffed%2BBald%2BEagle%2BPlushie%2BToy%2BGifts%2Bfor%2BKids&nsdOptOutParam=true&qid=1779985743&sprefix=beniny%2B4pcs%2Bbald%2Beagle%2Bstuffed%2Banimal%2C%2B18%2Binch%2Bmommy%2Beagle%2Bplush%2Bwith%2B3%2Bbaby%2Bchicks%2C%2Bstuffed%2Bbald%2Beagle%2Bplushie%2Btoy%2Bgifts%2Bfor%2Bkids%2Caps%2C308&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=tiagoolivei07-20&linkId=e437b5c73187a573eb21283c7875f1e0&language=en_US&ref_=as_li_ss_tl',
    imageUrl: 'https://m.media-amazon.com/images/I/71pyYE98R5L._AC_SL1500_.jpg',
    description: 'Eagle family plush set - Perfect gift for bird lovers',
    badge: 'Popular',
  };

  return (
    <a
      href={product.affiliateLink}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="block h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative bg-gradient-to-br from-gray-800 to-gray-900
          border-2 border-green-500/30 rounded-lg overflow-hidden
          transition-all duration-300 shadow-lg h-full flex flex-col
          ${isHovered ? 'border-green-500/60 shadow-2xl shadow-green-500/20 scale-[1.02]' : ''}
        `}
      >
        {/* Badge */}
        <div className="absolute top-2 left-2 z-10">
          <div className="bg-green-500 text-white px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1">
            <i className="fa-solid fa-star text-[8px]"></i>
            <span>{product.badge}</span>
          </div>
        </div>

        {/* Amazon Logo */}
        <div className="absolute top-2 right-2 z-10">
          <div className="bg-white px-2 py-1 rounded-md shadow-lg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/960px-Amazon_logo.svg.png"
              alt="Amazon"
              className="h-3 w-auto"
            />
          </div>
        </div>

        {/* Product Image */}
        <div className="flex items-center justify-center p-6 pt-12 pb-4">
          <img
            src={product.imageUrl}
            alt={product.name}
            className={`
              w-full h-auto max-w-[180px] mx-auto
              transition-transform duration-300
              ${isHovered ? 'scale-110' : 'scale-100'}
            `}
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col justify-end p-4 pt-2 gap-2">
          {/* Product Name */}
          <h3 className="text-base font-bold text-white leading-tight text-center">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-xs text-center">
            {product.description}
          </p>

          {/* Features */}
          <div className="flex flex-col gap-1.5 mt-2">
            <div className="bg-blue-500/20 border border-blue-500/40 rounded-md px-2 py-1 text-blue-300 text-xs font-medium flex items-center justify-center gap-1">
              <i className="fa-solid fa-box text-[10px]"></i>
              <span>4 Pieces Total</span>
            </div>
            <div className="bg-purple-500/20 border border-purple-500/40 rounded-md px-2 py-1 text-purple-300 text-xs font-medium flex items-center justify-center gap-1">
              <i className="fa-solid fa-heart text-[10px]"></i>
              <span>Soft & Cuddly</span>
            </div>
            <div className="bg-green-500/20 border border-green-500/40 rounded-md px-2 py-1 text-green-300 text-xs font-medium flex items-center justify-center gap-1">
              <i className="fa-solid fa-gift text-[10px]"></i>
              <span>Great Gift</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-3">
            <div
              className={`
                flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg
                bg-gradient-to-r from-green-500 to-emerald-500
                text-white font-bold text-sm
                transition-all duration-300
                ${isHovered ? 'shadow-lg shadow-green-500/50 scale-105' : 'shadow-md'}
              `}
            >
              <span>View on Amazon</span>
              <i className={`fa-solid fa-arrow-right text-xs transition-transform ${isHovered ? 'translate-x-1' : ''}`}></i>
            </div>
          </div>

          {/* Prime Badge */}
          <div className="flex items-center justify-center gap-1.5 text-blue-400 text-[10px] mt-2">
            <i className="fa-solid fa-shipping-fast"></i>
            <span className="font-medium">Prime Eligible</span>
          </div>
        </div>

        {/* Glow Effect on Hover */}
        <div
          className={`
            absolute inset-0 bg-gradient-to-b from-green-500/0 via-green-500/5 to-green-500/0
            transition-opacity duration-300 pointer-events-none
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}
        ></div>
      </div>
    </a>
  );
}
