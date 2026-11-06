import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';

export default function Navbar() {
  return (
    <nav className="w-full  text-[#0E261D] px-6 md:px-12 py-4 flex items-center justify-between border-b border-[#0E261D]/10">
      
      {/* Left Side: Brand Name */}
      <div className="flex items-center">
        <Link href="/" className="font-serif text-2xl md:text-3xl font-medium tracking-wider text-[#0E261D]">
          Rayvyn
        </Link>
      </div>

      {/* Middle: Navigation Links */}
      <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-[0.2em] font-sans">
        <Link href="/necklace" className="hover:opacity-70 transition-opacity">
          Necklaces
        </Link>
        <Link href="/ring" className="hover:opacity-70 transition-opacity">
          Rings
        </Link>
        <Link href="/bracelet" className="hover:opacity-70 transition-opacity">
          Bracelets
        </Link>
      </div>

      {/* Right Side: Cart & Profile Buttons */}
      <div className="flex items-center space-x-4">
        {/* Cart Button */}
        <Link
          href="/cart"
          className="relative p-2 text-black hover:opacity-70 transition-all flex items-center justify-center"
          aria-label="Cart"
        >
          {/* Cart Icon */}
          <FiShoppingCart className="text-xl" />
        
          {/* Count Badge positioned at top right */}
          <span className="absolute top-0 -right-1.5  text-[#008631] w-4 h-4 inline-flex items-center justify-center text-[10px] font-bold ">
            0
          </span>
        </Link>

      </div>

    </nav>
  );
}