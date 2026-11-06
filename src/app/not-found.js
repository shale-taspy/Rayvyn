"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen  text-[#111111] flex flex-col items-center justify-center p-6 text-center font-serif selection:bg-[#111111] selection:text-white">
      <div className="max-w-md mx-auto space-y-6 flex flex-col items-center">
        {/* 404 Display */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-serif font-light tracking-wide text-[#111111] my-2">
          404
        </h1>

        {/* Message */}
        <p className="text-sm sm:text-base text-[#4a4a4a] leading-relaxed max-w-xs font-sans tracking-wide">
          The page you are looking for does not exist or has been moved.
        </p>

        {/* CTA Button */}
        <div className="pt-4">
          <Link
            href="/"
            className="inline-block bg-[#08120e] hover:bg-[#111111] text-white text-xs uppercase tracking-[0.25em] font-sans px-8 py-4 transition-all duration-300 hover:opacity-90 active:scale-95"
          >
            RETURN TO HOME
          </Link>
        </div>
      </div>
    </div>
  );
}
