import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import acmLogo from "../../assets/d16feed6d1c3e6975f13d701bab37fa53bf54d76.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] rounded-lg blur opacity-40 group-hover:opacity-70 transition-opacity" />
            <img src={acmLogo} alt="ACM Logo" className="relative w-10 h-10 object-contain" style={{ filter: 'invert(1) hue-rotate(180deg)', mixBlendMode: 'screen' }} />
          </div>
          <div className="flex flex-col leading-tight min-w-0">
            <span style={{ fontSize: 15, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }} className="text-white truncate">SVIT ACM</span>
            <span style={{ fontSize: 9, fontWeight: 500, letterSpacing: 3, fontFamily: "'Orbitron', sans-serif" }} className="hidden sm:block text-[#00D4FF]/70">STUDENT CHAPTER</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative px-4 py-2 rounded-lg transition-all ${
                location.pathname === l.to
                  ? "text-[#00D4FF]"
                  : "text-white/60 hover:text-white"
              }`}
              style={{ fontSize: 13, fontWeight: 500, fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {location.pathname === l.to && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-white/5 rounded-lg border border-white/10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{l.label}</span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-flex relative group px-6 py-2.5 rounded-lg overflow-hidden"
          style={{ fontSize: 13, fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] transition-all group-hover:opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
          <span className="relative text-white">Join Us</span>
        </Link>

        {/* Mobile */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden inline-flex items-center justify-center p-2.5 rounded-lg border border-white/15 bg-black/40 text-white/90 hover:text-white hover:bg-white/10 flex-shrink-0"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-3 rounded-lg ${
                      location.pathname === l.to ? "bg-white/10 text-[#00D4FF]" : "text-white/60"
                    }`}
                    style={{ fontSize: 15, fontWeight: 500, fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="block mt-3 text-center px-5 py-3 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white rounded-lg" style={{ fontSize: 14, fontWeight: 600 }}>
                Join Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}