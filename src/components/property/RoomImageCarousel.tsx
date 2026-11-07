"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

interface RoomImageCarouselProps {
  images: string[];
  roomName: string;
  showThumbnails?: boolean;
}

export default function RoomImageCarousel({
  images,
  roomName,
  showThumbnails = true,
}: RoomImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-[16/10] bg-sand-light rounded-lg flex items-center justify-center text-stone-400">
        <ImageIcon className="w-8 h-8" />
      </div>
    );
  }

  const prevSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-3">
      {/* Main Slide */}
      <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full overflow-hidden rounded-lg bg-stone-100 group">
        <Image
          src={images[currentIndex]}
          alt={`${roomName} - View ${currentIndex + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 500px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          priority={currentIndex === 0}
        />

        {/* Counter Pill */}
        <div className="absolute bottom-3 right-3 bg-charcoal/70 backdrop-blur-sm text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full font-mono">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Prev / Next Arrows */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous image"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-charcoal flex items-center justify-center shadow-md transition-all opacity-80 sm:opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next image"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-charcoal flex items-center justify-center shadow-md transition-all opacity-80 sm:opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {showThumbnails && images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`relative w-16 h-12 shrink-0 rounded overflow-hidden border-2 transition-all ${
                currentIndex === idx
                  ? "border-forest ring-1 ring-forest/50 scale-100"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
              aria-label={`View image ${idx + 1}`}
            >
              <Image
                src={img}
                alt=""
                fill
                sizes="64px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

