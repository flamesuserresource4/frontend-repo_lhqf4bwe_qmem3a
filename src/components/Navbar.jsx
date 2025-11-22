import { Menu, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${
      scrolled ? "bg-slate-900/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30"></div>
          <div className="leading-tight">
            <p className="text-white font-semibold tracking-wide">BlueTech Institute</p>
            <p className="text-xs text-blue-200/80">Learn. Build. Grow.</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#courses" className="text-blue-100 hover:text-white transition">Courses</a>
          <a href="#testimonials" className="text-blue-100 hover:text-white transition">Success Stories</a>
          <a href="#contact" className="text-blue-100 hover:text-white transition">Contact</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+11234567890" className="inline-flex items-center gap-2 text-blue-100 hover:text-white transition">
            <Phone size={18} />
            <span>Call</span>
          </a>
          <a href="mailto:hello@bluetech.edu" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition">
            <Mail size={18} />
            <span>Enroll Now</span>
          </a>
        </div>

        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-white" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          <Menu />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            <a onClick={() => setOpen(false)} href="#courses" className="text-blue-100">Courses</a>
            <a onClick={() => setOpen(false)} href="#testimonials" className="text-blue-100">Success Stories</a>
            <a onClick={() => setOpen(false)} href="#contact" className="text-blue-100">Contact</a>
            <div className="flex gap-3 pt-2">
              <a href="tel:+11234567890" className="flex-1 text-center px-4 py-2 rounded-lg border border-white/10 text-blue-100">Call</a>
              <a href="mailto:hello@bluetech.edu" className="flex-1 text-center px-4 py-2 rounded-lg bg-blue-600 text-white">Enroll</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
