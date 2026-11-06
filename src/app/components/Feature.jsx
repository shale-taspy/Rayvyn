import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const pillarsData = [
  {
    vol: "VOL. 01",
    title: "Necklaces",
    description:
      "Chokers, Solitaire Pendants & Fluid Lariats sculpted with weightless precision.",
    link: "/necklaces",
    buttonText: "DISCOVER NECKLACES",
    image: "https://i.ibb.co.com/VYkhH5Qp/Necklace.png",
  },
  {
    vol: "VOL. 02",
    title: "Bracelets",
    description:
      "Diamond Tennis Bracelets, Sculptural Bangles & Linked Hand-Carved Chains.",
    link: "/bracelets",
    buttonText: "DISCOVER BRACELETS",
    image: "https://i.ibb.co.com/Kj3W8S9P/Bracelet.png",
  },
  {
    vol: "VOL. 03",
    title: "Rings",
    description:
      "Architectural Bands, Pavé Signets & Bespoke Statement Solitaires.",
    link: "/rings",
    buttonText: "DISCOVER RINGS",
    image: "https://i.ibb.co.com/S70Q815M/Ring.png",
  },
];

const Feature = () => {
  return (
    <section className="w-full text-[#0E261D] py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#0E261D]/60 font-semibold mb-2">
            ARCHITECTURE OF DESIRE
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0E261D]">
            The Three Pillars
          </h2>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillarsData.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#FAFAF7]/80 border border-white/60 rounded-2xl p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div>
                {/* Image Card Container */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-5">
                  {pillar.image ? (
                    <Image
                      src={pillar.image}
                      alt={pillar.title || "Jewelry feature"}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#0E261D]/10 flex items-center justify-center text-xs text-[#0E261D]/50">
                      No Image Provided
                    </div>
                  )}

                  {/* Top-Left Vol Badge */}
                  <div className="absolute top-3 left-3 bg-white/70 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-bold tracking-widest text-[#0E261D] uppercase">
                    {pillar.vol}
                  </div>
                </div>

                {/* Title and Price */}
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-serif text-xl font-medium text-[#0E261D]">
                    {pillar.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs text-[#0E261D]/70 leading-relaxed font-light mb-6 min-h-[36px]">
                  {pillar.description}
                </p>
              </div>

              {/* Action Link */}
              <Link
                href={pillar.link || "#"}
                className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-[#0E261D] uppercase hover:opacity-70 transition-opacity pt-2 border-t border-[#0E261D]/10"
              >
                <span>{pillar.buttonText}</span>
                <FiArrowRight className="text-xs" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Feature;