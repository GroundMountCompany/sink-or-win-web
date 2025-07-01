import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const VideoHero = () => (
  <>
    {/* Sticky Header */}
    <header className="sticky top-0 z-20 flex w-full items-center justify-between bg-white/90 px-3 py-2 shadow-sm backdrop-blur-sm sm:px-4 sm:py-3 md:px-6 md:py-4">
      <div className="flex items-center gap-1 sm:gap-2">
        <Image
          src="/logo.png"
          alt="Sink or Win Logo"
          width={96}
          height={96}
          className="size-12 sm:size-16 md:size-24"
        />
        <span className="text-sm font-bold text-brand sm:text-base md:text-lg">
          Sink or Win
        </span>
      </div>
      <nav className="flex items-center gap-2 sm:gap-4 md:gap-6">
        <a
          href="#about"
          className="text-xs text-brand hover:underline sm:text-sm md:text-base"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-xs text-brand hover:underline sm:text-sm md:text-base"
        >
          Contact
        </a>
        <Link
          href="/host"
          className="rounded-lg bg-gold px-2 py-1 text-xs font-bold text-brand transition-colors hover:bg-yellow-400 sm:px-3 sm:py-2 sm:text-sm md:px-4 md:py-2 md:text-base"
        >
          Host the Challenge
        </Link>
      </nav>
    </header>

    {/* Hero Section */}
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        src="/hero.mp4"
        className="absolute left-0 top-0 size-full object-cover"
        onError={(e) => console.error('Video error:', e)}
        onLoadStart={() => console.log('Video loading started')}
        onLoadedData={() => console.log('Video loaded successfully')}
      >
        Your browser does not support the video tag.
      </video>

      {/* Semi-transparent white overlay for readability */}
      <div className="absolute left-0 top-0 size-full bg-white/30"></div>

      {/* Hero content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 text-3xl font-extrabold text-brand sm:text-4xl md:text-5xl">
          Sink or Win
        </h1>
        <p className="mb-6 text-base text-brand sm:text-lg md:text-xl">
          Hit a hole-in-one, win $10,000.
        </p>
        <a href="#pricing">
          <button className="w-full rounded bg-gold px-4 py-3 text-base font-semibold text-brand transition hover:bg-yellow-400 sm:w-auto sm:px-6 sm:py-3 sm:text-lg">
            Choose Your Shot Pack
          </button>
        </a>
      </div>
    </div>
  </>
);

export { VideoHero };
