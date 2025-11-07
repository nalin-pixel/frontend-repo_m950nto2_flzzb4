import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#insights', label: 'Insights' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-black/60 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-fuchsia-500 shadow-lg shadow-blue-500/30" />
            <span className="font-semibold tracking-wide text-white group-hover:text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-fuchsia-200 transition-colors">DSRPT</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-fuchsia-500 hover:after:w-full after:transition-all"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/20 text-white backdrop-blur border border-white/10 transition-colors">
              Get a Quote <ArrowRight size={16} />
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg bg-white/10 border border-white/10 text-white"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur">
          <div className="px-4 py-4 space-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-gray-200 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/20 text-white backdrop-blur border border-white/10">
              <ArrowRight size={16} /> Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
