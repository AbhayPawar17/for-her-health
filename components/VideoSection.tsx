import React from 'react';
import Image from "next/image";

const VideoSection = () => {
    return (
        <section className="w-full py-24 bg-pink-50 flex flex-col justify-center items-center gap-12">
            <div className="text-center space-y-4 flex flex-col items-center">
                <h2 className="text-pink-600 font-bold tracking-[0.2em] uppercase text-base md:text-xl">What We Offer</h2>
                <div className="flex items-center justify-center gap-3 flex-wrap">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-neutral-900 tracking-tight drop-shadow-sm">About </h2>
                    <div className="relative h-10 md:h-16 w-[180px] md:w-[280px]">
                        <Image
                            src="https://forherhealthwomen.com/wp-content/uploads/2022/01/cropped-cropped-450logo.png"
                            alt="For Her Health Logo"
                            fill
                            className="object-contain object-left"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full max-w-5xl px-6">
                <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl aspect-video border-4 border-white">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/5A4cwMaH3rs"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
