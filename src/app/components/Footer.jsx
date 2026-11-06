import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#F8E4C6] text-[#0E261D] border-t border-[#0E261D]/15 font-sans pt-16 pb-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-16">
        
        {/* Brand Column */}
        <div className="space-y-4 md:col-span-1">
          <Link href="/" className="font-serif text-3xl font-medium tracking-wider text-[#0E261D] block">
            Rayvyn
          </Link>
          <p className="text-xs leading-relaxed text-[#0E261D]/70 max-w-xs font-light">
            Crafted luxury jewelry designed to reflect your unique aura and modern elegance.
          </p>
        </div>

        {/* Collections */}
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#0E261D]">
            Collections
          </p>
          <ul className="space-y-2.5 text-xs tracking-wider uppercase">
            <li>
              <Link href="/bracelets" className="hover:opacity-60 transition-opacity">
                Bracelets
              </Link>
            </li>
            <li>
              <Link href="/necklaces" className="hover:opacity-60 transition-opacity">
                Necklaces
              </Link>
            </li>
            <li>
              <Link href="/rings" className="hover:opacity-60 transition-opacity">
                Rings
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Care */}
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#0E261D]">
            Customer Care
          </p>
          <ul className="space-y-2.5 text-xs tracking-wider uppercase">
            <li>
              <Link href="/shipping" className="hover:opacity-60 transition-opacity">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link href="/care-guide" className="hover:opacity-60 transition-opacity">
                Jewelry Care
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:opacity-60 transition-opacity">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-[#0E261D]/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#0E261D]/60 tracking-wider uppercase gap-4">
        <p>© 2026 RAYVYN. ALL RIGHTS RESERVED.</p>
        <div className="flex items-center space-x-6">
          <Link href="/privacy" className="hover:text-[#0E261D] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[#0E261D] transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}