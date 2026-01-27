"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

interface MediaItem {
    type: "image" | "video";
    src: string;
    alt?: string;
    poster?: string; // For video thumbnails
}

interface ProductGalleryProps {
    items: MediaItem[];
    className?: string;
}

export function ProductGallery({ items, className }: ProductGalleryProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    return (
        <div className={cn("space-y-4", className)}>
            {/* Main Viewport */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800 group">
                {items[activeIndex].type === "image" ? (
                    <Image
                        src={items[activeIndex].src}
                        alt={items[activeIndex].alt || "Product image"}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105 cursor-zoom-in"
                        onClick={() => setLightboxOpen(true)}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                    />
                ) : (
                    <div className="relative h-full w-full">
                        <video
                            src={items[activeIndex].src}
                            poster={items[activeIndex].poster}
                            className="h-full w-full object-cover"
                            controls
                        />
                    </div>
                )}

                {/* Navigation Arrows */}
                <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    <Button
                        variant="secondary"
                        size="icon"
                        onClick={(e) => {
                            e.stopPropagation();
                            prevSlide();
                        }}
                        className="h-10 w-10 rounded-full shadow-lg bg-white/80 backdrop-blur pointer-events-auto"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                        variant="secondary"
                        size="icon"
                        onClick={(e) => {
                            e.stopPropagation();
                            nextSlide();
                        }}
                        className="h-10 w-10 rounded-full shadow-lg bg-white/80 backdrop-blur pointer-events-auto"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </Button>
                </div>

                {/* Counter Badge */}
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-white pointer-events-none z-10">
                    {activeIndex + 1} / {items.length}
                </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {items.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={cn(
                            "relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all",
                            index === activeIndex
                                ? "border-edg-brand ring-2 ring-edg-brand/20"
                                : "border-transparent opacity-70 hover:opacity-100"
                        )}
                    >
                        {item.type === "image" ? (
                            <Image
                                src={item.src}
                                alt={item.alt || `Thumbnail ${index + 1}`}
                                fill
                                className="object-cover"
                                sizes="80px"
                            />
                        ) : (
                            <div className="relative h-full w-full bg-zinc-900">
                                {item.poster && (
                                    <Image
                                        src={item.poster}
                                        alt="Video thumbnail"
                                        fill
                                        className="object-cover opacity-50"
                                    />
                                )}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Play className="h-6 w-6 text-white fill-white" />
                                </div>
                            </div>
                        )}
                    </button>
                ))}
            </div>

            {/* Simple Lightbox (Overlay) */}
            {lightboxOpen && items[activeIndex].type === "image" && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-in fade-in duration-200"
                    onClick={() => setLightboxOpen(false)}
                >
                    <button
                        className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-50"
                        onClick={() => setLightboxOpen(false)}
                    >
                        <X className="h-8 w-8" />
                    </button>

                    <div className="relative w-full h-full max-h-[90vh] max-w-[90vw]">
                        <Image
                            src={items[activeIndex].src}
                            alt={items[activeIndex].alt || "Product image"}
                            fill
                            className="object-contain"
                            onClick={(e) => e.stopPropagation()}
                            sizes="100vw"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
