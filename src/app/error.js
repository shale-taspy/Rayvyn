"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center font-sans selection:bg-[#0a1410] selection:text-white">
      <div className="max-w-md w-full flex flex-col items-center">
        <p className="text-xs sm:text-sm font-medium tracking-[0.35em] uppercase text-[#b59a7c] mb-8 sm:mb-10">
          ATELIER PROTOCOL
        </p>

        <h1 className="text-7xl sm:text-8xl md:text-9xl font-serif font-normal tracking-wide text-[#0c1a13] mb-4">
          500
        </h1>

        <p className="text-sm sm:text-base text-[#4a4a4a] leading-relaxed max-w-xs mb-10 sm:mb-12 font-light">
          Something went wrong on our end.
          <br />
          Please try again or return to the salon.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/"
            className="inline-block bg-[#0a1410] hover:bg-[#1a2b22] text-[#fbf9f5] text-xs font-mono font-medium tracking-[0.25em] py-4 px-8 uppercase transition-all duration-300 shadow-sm"
          >
            RETURN TO HOME
          </Link>
        </div>
      </div>
    </div>
  );
}
