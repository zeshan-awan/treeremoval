"use client";

import Image from "next/image";
import { useState } from "react";

const items = [
  {
    before:
      "https://images.pexels.com/photos/6407819/pexels-photo-6407819.jpeg",
    after:
      "https://images.pexels.com/photos/6407813/pexels-photo-6407813.jpeg",
    alt: "Large tree removal before and after in High Point, NC"
  },
  {
    before:
      "https://images.pexels.com/photos/450516/pexels-photo-450516.jpeg",
    after:
      "https://images.pexels.com/photos/450516/pexels-photo-450516.jpeg",
    alt: "Fence line cleared of overgrown trees and brush"
  }
];

export function GallerySection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16 bg-slate-50">
      <div className="container-page space-y-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-2">
            Before &amp; After Tree Projects Around High Point
          </h2>
          <p className="text-slate-600">
            See how proper tree removal, trimming and land clearing can open up
            your yard, protect your home and boost curb appeal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-black shadow-soft cursor-pointer"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative h-64">
                <Image
                  src={item.before}
                  alt={item.alt}
                  fill
                  className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <Image
                  src={item.after}
                  alt={item.alt}
                  fill
                  className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex justify-between p-4 text-xs font-semibold tracking-wide uppercase text-white">
                <span className="px-2 py-1 rounded-full bg-white/15 border border-white/25 backdrop-blur">
                  Before
                </span>
                <span className="px-2 py-1 rounded-full bg-primary border border-primary-light text-[10px]">
                  Hover to see after
                </span>
              </div>
              {hovered === index && (
                <div className="absolute bottom-0 left-0 right-0 flex justify-between p-4 text-xs font-semibold uppercase text-white">
                  <span className="px-2 py-1 rounded-full bg-primary border border-primary-light">
                    After
                  </span>
                  <span className="px-2 py-1 rounded-full bg-white/15 border border-white/25 backdrop-blur">
                    High Point, NC
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


