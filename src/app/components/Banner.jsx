import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCalendar } from "react-icons/fi";

const Banner = () => {
  return (
    <section className="w-full  text-[#0E261D] py-12 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Content Column */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Top Pill / Tag */}
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-[#0E261D]/10 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase text-[#0E261D]/80">
            <span className="animate-ping w-2 h-2 rounded-full bg-[#D4A373]"></span>
            <span>Maison Fondée À Paris • 2025</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.15] text-[#0E261D]">
            Sculpted in Light, <br />
            <span className="italic font-light">Forged in Eternity</span>
          </h1>

          {/* Subtitle / Description */}
          <p className="text-xs sm:text-sm text-[#0E261D]/75 leading-relaxed max-w-lg font-light">
            Modern fine jewelry handcrafted in 18k recycled gold and conflict-free diamonds. Architectural silhouettes born from Parisian atelier tradition.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Primary Button */}
            <Link
              href="/collections"
              className="bg-[#0E261D] text-[#F8E4C6] px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase flex items-center gap-3 hover:bg-[#0E261D]/90 transition-all shadow-sm"
            >
              <span>Explore the Three Pillars</span>
              <FiArrowRight className="text-sm" />
            </Link>
          </div>

          {/* Provenance / Certification Grid Card */}
          <div className="pt-4">
            <div className="bg-white/40 border border-white/60 rounded-2xl p-4 sm:p-5 grid grid-cols-3 gap-4 text-left shadow-sm">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#0E261D]/50 font-semibold mb-1">
                  Provenance
                </p>
                <p className="font-serif text-xs sm:text-sm font-medium text-[#0E261D]">
                  Place Vendôme
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#0E261D]/50 font-semibold mb-1">
                  Gold Purity
                </p>
                <p className="font-sans text-xs sm:text-sm font-semibold text-[#0E261D]">
                  18K 750‰
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#0E261D]/50 font-semibold mb-1">
                  Certification
                </p>
                <p className="font-sans text-xs sm:text-sm font-semibold text-[#0E261D]">
                  GIA / Gübelin
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Image Column */}
        <div className="lg:col-span-6 relative flex">
          <div className="relative w-full min-h-[480px] sm:min-h-[560px] lg:min-h-[620px] rounded-3xl overflow-hidden shadow-xl border border-white/40">
            <Image
              src="/Banner.jpeg" // or your ImgBB URL
              alt="Sculpted in Light jewelry collection feature"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[0%_center] scale-110 origin-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;