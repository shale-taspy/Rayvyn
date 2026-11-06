import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiHeart, FiSliders, FiChevronDown } from "react-icons/fi";
import NecklaceCard from "../components/NecklaceCard";

async function NecklacesList() {
  "use cache";
  
  const res = await fetch(`http://localhost:7000/necklace`);
  const necklaces = await res.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {necklaces.map((necklace) => (
        <NecklaceCard key={necklace._id || necklace.productId} necklace={necklace} />
      ))}
    </div>
  );
}

const NecklacesPage = () => {
  return (
    <div className="w-full text-[#0E261D] min-h-screen py-12 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#0E261D]/60 font-semibold mb-2">
              — HAUTE JOAILLERIE N° IV
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0E261D] mb-3">
              The Necklaces Collection
            </h1>
            <p className="text-xs sm:text-sm text-[#0E261D]/70 max-w-xl leading-relaxed font-light">
              Sculpted collars, solitaires, and cascading pendants crafted in 18k noble gold and platinum. Hand-set gems capturing light with architectural precision.
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

        {/* Product Grid Container wrapped in Suspense */}
        <Suspense fallback={
          <div className="py-20 text-center text-xs uppercase tracking-[0.2em] text-[#0E261D]/50">
            Loading collection...
          </div>
        }>
          <NecklacesList />
        </Suspense>

      </div>
    </div>
  );
};

export default NecklacesPage;