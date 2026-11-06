import Image from "next/image";
import Link from "next/link";
import { FiHeart, FiSliders, FiChevronDown } from "react-icons/fi";

const braceletsData = [
  {
    id: 1,
    title: "Diamond Tennis Bracelet",
    subtitle: "BRILLIANT CUT DIAMONDS IN 18K WHITE GOLD",
    price: "$4,500",
    tag: "TENNIS",
    image: "",
  },
  {
    id: 2,
    title: "Sculptural Gold Bangle",
    subtitle: "ARCHITECTURAL 18K NOBLE YELLOW GOLD",
    price: "$2,800",
    tag: "BANGLE",
    image: "",
  },
  {
    id: 3,
    title: "Linked Hand-Carved Chain",
    subtitle: "TEXTURED LINKS WITH SATIN FINISH",
    price: "$3,300",
    tag: "CHAIN",
    image: "",
  },
  {
    id: 4,
    title: "Vendôme Diamond Cuff",
    subtitle: "OPEN CUFF WITH PAVÉ DIAMOND TERMINALS",
    price: "$6,100",
    tag: "CUFF",
    image: "",
  },
  {
    id: 5,
    title: "L'Ombre Rose Gold Links",
    subtitle: "INTERLINKED MOTIFS IN 18K ROSE GOLD",
    price: "$3,750",
    tag: "SAUTOIR LINK",
    image: "",
  },
  {
    id: 6,
    title: "Aura Platinum Rivière",
    subtitle: "GRADUATED DIAMONDS SET IN PLATINUM",
    price: "$7,900",
    tag: "RIVIÈRE",
    image: "",
  },
];

const Bracelets = () => {
  return (
    <div className="w-full text-[#0E261D] min-h-screen py-12 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#0E261D]/60 font-semibold mb-2">
              — HAUTE JOAILLERIE N° VI
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0E261D] mb-3">
              The Bracelets Collection
            </h1>
            <p className="text-xs sm:text-sm text-[#0E261D]/70 max-w-xl leading-relaxed font-light">
              Diamond tennis bracelets, sculptural bangles, and linked hand-carved chains crafted with fluid elegance and timeless balance.
            </p>
          </div>

          <div className="text-right shrink-0">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#0E261D]/60 font-bold mb-1">
              ARCHIVAL SERIES
            </p>
            <p className="text-xs font-serif italic text-[#0E261D]/80">
              06 / LIMITED EDITIONS
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {braceletsData.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAFAF7]/80 border border-white/60 rounded-2xl p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div>
                {/* Image Container with Conditional Fallback */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-[#0E261D]/5 flex items-center justify-center">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="text-center p-4">
                      <span className="text-[10px] tracking-widest text-[#0E261D]/40 uppercase font-semibold block">
                        No Image Provided
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-serif text-lg font-medium text-[#0E261D] truncate">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#0E261D]">
                    {item.price}
                  </span>
                </div>

                <p className="text-[10px] tracking-wider text-[#0E261D]/60 uppercase font-medium mb-6">
                  {item.subtitle}
                </p>
              </div>

              <div className="pt-2 border-t border-[#0E261D]/10">
                <button className="w-full bg-[#0E261D] hover:bg-[#0E261D]/90 text-white text-[9px] font-bold tracking-[0.2em] uppercase py-2.5 rounded-lg transition-colors text-center">
                  BUY NOW
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Bracelets;