"use client";

import Image from "next/image";
import type React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

interface CarouselProps {
  images: { src: string; alt: string; description?: string }[];
  autoplayDelay?: number;
  showPagination?: boolean;
  showNavigation?: boolean;
  tabCount?: number;
  tabIds?: string[];
  activeTabIndex?: number;
  onTabClick?: (i: number) => void;
  title?: string;
  description?: string;
}

export const CardCarousel: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
  tabIds,
  activeTabIndex,
  onTabClick,
  title,
  description,
}) => {
  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 34px;
  }

  /* Base slide styling (desktop) */
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 200px; /* downscaled ~1.5x */
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  /* Tablet: slightly smaller slides and tighter spacing */
  @media (max-width: 1024px) {
    .swiper {
      padding-bottom: 27px;
    }
    .swiper-slide {
      width: 146px; /* downscaled ~1.5x */
    }
  }

  /* Mobile: much smaller slides so carousel appears compact */
  @media (max-width: 640px) {
    .swiper {
  padding-bottom: 28px;
    }
    .swiper-slide {
  width: 160px; /* bigger cards on mobile */
    }
    /* reduce caption size on small screens */
    .swiper-slide .text-sm {
      font-size: 0.65rem;
    }
    /* keep overlay captions visible on small devices */
    .card-caption {
      display: block !important;
      bottom: 8px !important;
      left: 50% !important;
      transform: translateX(-50%) !important;
      max-width: 92% !important;
      padding: 0.35rem 0.6rem !important;
      font-size: 0.8rem !important;
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
    }
  }

  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  /* Caption styling for overlay readability */
  .card-caption {
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1rem;
  text-align: center;
  background: transparent;
  color: var(--color-foreground);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  max-width: 86%;
  width: auto;
  }
  `;
  return (
    <section className="w-ace-y-4">
      <style>{css}</style>
      <div className="mx-auto w-full max-w-6xl rounded-[24px] border border-black/5 shadow-sm">
        <div className="relative mx-auto flex w-full flex-col rounded-[24px] border border-black/5 bg-foreground/5 p-2 shadow-sm md:items-start md:gap-8 md:p-2">
          <div className="flex flex-col justify-center pb-2 px-4 pt-6 md:pt-8 items-center md:items-start">
            <div className="flex gap-2">
              <div>
                <h3 className="text-4xl opacity-85 font-bold tracking-tight text-center md:text-left">
                  {title ?? "Technologies"}
                </h3>
                <p className="max-w-md my-1 mb-2 md:my-0 md:mt-1 text-muted-foreground/70 text-sm md:text-lg text-center md:text-left">
                  {description ?? "Showcasing the tools and libraries used."}
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full items-center justify-center gap-4">
            <div className="w-full">
              {tabIds && tabIds.length > 0 && (
                <div className="mb-4 flex items-center justify-center gap-2">
                  {tabIds.map((id, i) => (
                    <button
                      key={`tab-indicator-${id}`}
                      type="button"
                      onClick={() => onTabClick?.(i)}
                      aria-label={`Show ${id}`}
                      className={`h-2 w-8 rounded-full transition-colors duration-150 ${
                        activeTabIndex === i
                          ? "bg-zinc-900 dark:bg-zinc-100"
                          : "bg-zinc-200 dark:bg-zinc-700/50"
                      }`}
                    />
                  ))}
                </div>
              )}
              <Swiper
                spaceBetween={40}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 66 /* reduced ~1.5x */,
                  modifier: 1.6 /* reduced for subtler effect */,
                }}
                breakpoints={{
                  0: {
                    spaceBetween: 12,
                    coverflowEffect: {
                      depth: 40,
                      modifier: 1.2,
                    },
                  },
                  640: {
                    spaceBetween: 24,
                    coverflowEffect: {
                      depth: 50,
                      modifier: 1.4,
                    },
                  },
                  1024: {
                    spaceBetween: 40,
                    coverflowEffect: {
                      depth: 66,
                      modifier: 1.6,
                    },
                  },
                }}
                pagination={showPagination}
                navigation={
                  showNavigation
                    ? {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }
                    : undefined
                }
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
              >
                {images.map((image) => (
                  <SwiperSlide key={`large-${image.src}`}>
                    <div className="relative w-full glassmorphism dark:bg-white border border-black/5 rounded-lg">
                      <Image
                        src={image.src}
                        width={334}
                        height={334}
                        className="w-full h-auto"
                        alt={image.alt}
                      />
                      <div className="card-caption">
                        <span className="block font-semibold text-sm">
                          {image.alt}
                        </span>
                        {image.description ? (
                          <span className="block text-xs opacity-90 mt-1 whitespace-nowrap">
                            {image.description}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                {images.map((image) => (
                  <SwiperSlide key={`small-${image.src}`}>
                    <div className="relative w-full glassmorphism dark:bg-white border border-black/5 rounded-lg">
                      <Image
                        src={image.src}
                        width={134}
                        height={134}
                        className="w-full h-auto"
                        alt={image.alt}
                      />
                      <div className="card-caption">
                        <span className="block font-semibold text-sm">
                          {image.alt}
                        </span>
                        {image.description ? (
                          <span className="block text-xs opacity-90 mt-1 whitespace-nowrap">
                            {image.description}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
