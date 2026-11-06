import React from 'react';
import Image from 'next/image';

const NecklaceCard = ({ necklace }) => {
  return (
    <div className="bg-[#FAFAF7]/80 border border-white/60 rounded-2xl p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300">
      <div>
        {/* Image Container with Conditional Fallback */}
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-[#0E261D]/5 flex items-center justify-center">
          {necklace.image ? (
            <Image
              src={necklace.image}
              alt={necklace.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="text-center p-4">
              <span className="text-[10px] tracking-widest text-[#0E261D]/40 uppercase font-semibold block">
                No Image Provided
              </span>
            </div>
          )}

          {/* Top-left tag badge */}
          {necklace.tag && (
            <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[8px] font-bold tracking-widest text-[#0E261D] uppercase">
              {necklace.tag}
            </div>
          )}
        </div>

        <div className="flex items-baseline justify-between gap-2 mb-1">
          <h3 className="font-serif text-lg font-medium text-[#0E261D] truncate">
            {necklace.title}
          </h3>
          <span className="text-xs font-semibold text-[#0E261D]">
            {necklace.price}
          </span>
        </div>

        <p className="text-[10px] tracking-wider text-[#0E261D]/60 uppercase font-medium mb-6">
          {necklace.subtitle}
        </p>
      </div>

      {/* Conditional Action Button based on Stock */}
      <div className="pt-2 border-t border-[#0E261D]/10">
        <button
          disabled={necklace.inStock === false}
          className={`w-full text-[9px] font-bold tracking-[0.2em] uppercase py-2.5 rounded-lg transition-colors text-center ${
            necklace.inStock !== false
              ? "bg-[#035347] hover:bg-[#035347]/90 text-white cursor-pointer"
              : "bg-[#0E261D]/20 text-[#0E261D]/50 cursor-not-allowed"
          }`}
        >
          {necklace.inStock !== false ? "SEE DETAILS" : "OUT OF STOCK"}
        </button>
      </div>
    </div>
  );
};

export default NecklaceCard;