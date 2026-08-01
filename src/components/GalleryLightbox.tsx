"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
};

export default function GalleryLightbox({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const close = () => setIndex(null);
  const prev = () => setIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const next = () => setIndex((i) => (i === null ? null : (i + 1) % images.length));

  useEffect(() => {
    if (index === null) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [index]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setIndex(i)}
            className="relative aspect-square overflow-hidden cursor-zoom-in"
            aria-label={`Ver imagen ampliada: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              loading="lazy"
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </button>
        ))}
      </div>

      {index !== null && (
        <div
          className="fixed inset-0 z-[100] bg-dark/95 flex items-center justify-center px-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={images[index].alt}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-5 right-5 text-white/80 hover:text-white w-11 h-11 flex items-center justify-center border border-white/30 hover:border-white transition-colors"
            aria-label="Cerrar"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white w-11 h-11 md:w-14 md:h-14 flex items-center justify-center border border-white/30 hover:border-white transition-colors"
            aria-label="Imagen anterior"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white w-11 h-11 md:w-14 md:h-14 flex items-center justify-center border border-white/30 hover:border-white transition-colors"
            aria-label="Imagen siguiente"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            className="relative w-full max-w-4xl aspect-[4/3] md:aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index].src}
              alt={images[index].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-xs md:text-sm text-center px-4">
            {index + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
