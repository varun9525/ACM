import { Link } from "react-router";
import { Github, Linkedin, Instagram, Mail, MapPin, ArrowUpRight } from "lucide-react";
import acmLogo from "../../../acm_chapter_sym.svg";
import RollingText from "./RollingText";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/5">
      {/* Gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[600px] h-px bg-gradient-to-r from-transparent via-[#0066FF]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={acmLogo} alt="ACM Logo" className="w-12 h-12 object-contain" />
              <div className="flex flex-col leading-tight">
                <span style={{ fontSize: 15, fontWeight: 700 }} className="text-white">SVIT ACM</span>
                <span style={{ fontSize: 8, fontWeight: 500, letterSpacing: 3, fontFamily: "'Orbitron', sans-serif" }} className="text-[#00D4FF]/50">STUDENT CHAPTER</span>
              </div>
            </div>
            <p style={{ fontSize: 13 }} className="text-white/30 mb-5">Empowering students through technology, innovation, and community.</p>
            <div className="flex gap-2">
              {[Github, Linkedin, Instagram, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 hover:border-[#0066FF]/50 hover:bg-[#0066FF]/10 transition-all flex items-center justify-center text-white/40 hover:text-[#00D4FF]">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2 }} className="text-white/50 uppercase mb-4">Navigate</h4>
            {["About", "Events", "Team", "Contact"].map((l) => (
              <Link key={l} to={`/${l.toLowerCase()}`} className="group group/btn flex items-center gap-1 py-1.5 text-white/30 hover:text-[#00D4FF] transition-colors" style={{ fontSize: 13 }}>
                <RollingText text={l} activeColor="text-[#00D4FF]" /> <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>

          <div>
            <h4 style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2 }} className="text-white/50 uppercase mb-4">Resources</h4>
            {["ACM Digital Library", "Membership", "Code of Ethics", "Research"].map((l) => (
              <a key={l} href="https://india.acm.org/" className="group group/btn flex items-center gap-1 py-1.5 text-white/30 hover:text-[#00D4FF] transition-colors" style={{ fontSize: 13 }}>
                <RollingText text={l} activeColor="text-[#00D4FF]" /> <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>

          <div>
            <h4 style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2 }} className="text-white/50 uppercase mb-4">Contact</h4>
            <div className="flex items-start gap-2 mb-3">
              <MapPin size={14} className="mt-0.5 shrink-0 text-[#0066FF]" />
              <span style={{ fontSize: 13 }} className="text-white/30">SVIT Campus, Vasad, Gujarat</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="shrink-0 text-[#0066FF]" />
              <span style={{ fontSize: 13 }} className="text-white/30">acm@svitvasad.ac.in</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p style={{ fontSize: 12 }} className="text-white/20">&copy; 2026 SVIT ACM Student Chapter</p>
          <p style={{ fontSize: 12 }} className="text-white/20">Built with passion & code</p>
        </div>
      </div>
    </footer>
  );
}