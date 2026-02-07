"use client";

import Image from "next/image";
import { useState } from "react";

export type ScreenshotItem = {
  src: string;
  alt: string;
  caption: string;
};

type ScreenshotGalleryProps = {
  images: ScreenshotItem[];
};

export function ScreenshotGallery({ images }: ScreenshotGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const selected = openIndex !== null ? images[openIndex] : null;

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="group text-left"
            aria-label={`Open screenshot: ${image.caption}`}
          >
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-soft transition group-hover:-translate-y-1 group-hover:shadow-glow dark:border-slate-700 dark:bg-slate-900">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={1200}
                className="h-auto w-full rounded-2xl object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot preview"
          onClick={() => setOpenIndex(null)}
        >
          <div className="relative max-h-[92vh] w-full max-w-md" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setOpenIndex(null)}
              className="absolute right-2 top-2 z-10 rounded-full bg-black/70 px-3 py-1 text-sm text-white"
              aria-label="Close screenshot preview"
            >
              Close
            </button>
            <Image
              src={selected.src}
              alt={selected.alt}
              width={800}
              height={1600}
              className="h-auto w-full rounded-3xl border border-white/30 shadow-2xl"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
