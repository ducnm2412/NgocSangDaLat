"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";

const arrowClass =
  "absolute top-1/2 z-1 hidden size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-forest text-xl text-cream shadow-[0_10px_20px_-10px_rgba(22,41,31,0.7)] transition-transform hover:scale-105 nav:flex";

export function GalleryCarousel({
  items,
}: {
  items: { src: StaticImageData; alt: string }[];
}) {
  const scroller = useRef<HTMLUListElement>(null);
  const scroll = (direction: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <ul
        ref={scroller}
        tabIndex={0}
        aria-label="Hình ảnh khách sạn Ngọc Sang"
        className="ns-scroller flex snap-x snap-mandatory gap-3.5 overflow-x-auto scroll-smooth rounded-xl"
      >
        {items.map((item) => (
          <li
            key={item.alt}
            className="w-[72%] shrink-0 snap-start nav:w-[calc((100%-56px)/5)]"
          >
            <Image
              src={item.src}
              alt={item.alt}
              sizes="(min-width: 860px) 230px, 72vw"
              className="ns-zoomable aspect-4/3 w-full rounded-xl object-cover"
            />
          </li>
        ))}
      </ul>
      <button
        type="button"
        aria-label="Ảnh trước"
        onClick={() => scroll(-1)}
        className={`${arrowClass} -left-5`}
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Ảnh tiếp theo"
        onClick={() => scroll(1)}
        className={`${arrowClass} -right-5`}
      >
        ›
      </button>
    </div>
  );
}
