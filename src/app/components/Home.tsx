import { Link } from "react-router";
import { ArrowRight, Users, Calendar, Trophy, BookOpen, Code, Lightbulb, Rocket, Shield, ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import ParticleField from "./ParticleField";
import TiltCard from "./TiltCard";
import GlowText from "./GlowText";
import AnimatedCounter from "./AnimatedCounter";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import acmLogo from "../../assets/d16feed6d1c3e6975f13d701bab37fa53bf54d76.png";
import acmTextLogo from "../../assets/757ae12a6ac34d5e0f9d1d6febf918ba3d0766c4.png";
import svitLogo from "../../assets/60f890f078ccfdd0a75c615682bd090c4e098d86.png";
import svitCampus from "../../assets/38cc7112b553bd6144b9a84e15b6b77217b38a0c.png";

const stats = [
  { icon: Users, value: 17, suffix: "", label: "Members" },
  { icon: Calendar, value: 1, suffix: "", label: "Events Planned" },
  { icon: Trophy, value: 5, suffix: "+", label: "Domains" },
  { icon: BookOpen, value: 2026, suffix: "", label: "Established" },
];

const domains = [
  { icon: Code, title: "Competitive Programming", desc: "Master algorithms through regular contests and practice.", color: "from-blue-500 to-cyan-400" },
  { icon: Lightbulb, title: "Web Development", desc: "Build modern web apps with cutting-edge frameworks.", color: "from-purple-500 to-pink-500" },
  { icon: Rocket, title: "AI / Machine Learning", desc: "Explore deep learning, NLP, and computer vision.", color: "from-orange-500 to-yellow-400" },
  { icon: Shield, title: "Cybersecurity", desc: "Ethical hacking, CTFs, and security research.", color: "from-emerald-500 to-teal-400" },
];

const upcomingEvents = [
  { date: "APR 02", title: "Inauguration Ceremony", desc: "Grand inauguration of SVIT ACM Student Chapter", tag: "Inauguration", color: "from-blue-500 to-cyan-400" },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-[#050510] text-white overflow-hidden" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      {/* ===== HERO ===== */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleField />

        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#0066FF]/15 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-[#00D4FF]/10 rounded-full blur-[120px]" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px]" />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }} />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
          >
            <img src={acmLogo} alt="ACM" className="w-7 h-7 object-contain" style={{ filter: 'invert(1) hue-rotate(180deg)', mixBlendMode: 'screen' }} />
            <span className="w-px h-5 bg-white/15" />
            <img src={svitLogo} alt="SVIT" className="w-7 h-7 object-contain" style={{ mixBlendMode: 'screen' }} />
            <span className="w-px h-5 bg-white/15" />
            <span style={{ fontSize: 13, fontWeight: 500 }} className="text-white/70">Association for Computing Machinery</span>
          </motion.div>

          {/* Main heading */}
          <h1 style={{ fontWeight: 800, fontFamily: "'Orbitron', sans-serif", lineHeight: 1.1 }} className="text-5xl sm:text-6xl lg:text-8xl mb-6">
            <GlowText text="SVIT ACM" className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80" delay={0.3} />
            <GlowText text="Student Chapter" className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-[#00D4FF] to-[#0066FF]" delay={0.6} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            style={{ fontSize: 17 }}
            className="text-white/40 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Fostering a community of passionate technologists. Learn, build, innovate — and shape the future of computing.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/contact" className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl overflow-hidden" style={{ fontSize: 15, fontWeight: 600 }}>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF] to-[#00D4FF]" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
              <span className="relative">Join the Chapter</span>
              <ArrowRight size={18} className="relative group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/events" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white/70 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all backdrop-blur-sm" style={{ fontSize: 15, fontWeight: 600 }}>
              Explore Events
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
            >
              <div className="w-1 h-2 rounded-full bg-white/40" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== STATS ===== */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#0a0a1a] to-[#050510]" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <TiltCard key={s.label}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6 text-center hover:border-[#0066FF]/30 transition-colors"
                >
                  <s.icon size={26} className="mx-auto mb-3 text-[#00D4FF]" />
                  <div style={{ fontSize: 36, fontWeight: 800, fontFamily: "'Orbitron', sans-serif" }} className="text-white">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: 1 }} className="text-white/30 uppercase">{s.label}</div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="py-28 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#0066FF]/10 rounded-full blur-[150px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#0066FF]/30 to-[#00D4FF]/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1728933102332-a4f1a281a621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc0NjYwNDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Team collaboration"
                  className="w-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, fontFamily: "'Orbitron', sans-serif" }} className="text-[#00D4FF]/70 uppercase mb-4 block">Who We Are</span>
            <h2 style={{ fontWeight: 800, fontFamily: "'Orbitron', sans-serif" }} className="text-3xl sm:text-4xl text-white mb-6 leading-tight">
              Building the Next Gen of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00D4FF]">Tech Leaders</span>
            </h2>
            <p style={{ fontSize: 15 }} className="text-white/40 mb-4 leading-relaxed">
              The SVIT ACM Student Chapter is a vibrant community dedicated to advancing computing. We provide resources, networking, and opportunities for students passionate about technology.
            </p>
            <p style={{ fontSize: 15 }} className="text-white/40 mb-8 leading-relaxed">
              Through hackathons, workshops, guest lectures, and collaborative projects, we bridge the gap between academics and real-world industry skills.
            </p>
            <Link to="/about" className="group inline-flex items-center gap-2 text-[#00D4FF] hover:gap-3 transition-all" style={{ fontSize: 14, fontWeight: 600 }}>
              Learn more about us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== DOMAINS ===== */}
      <section className="py-28 relative">
        <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, fontFamily: "'Orbitron', sans-serif" }} className="text-[#00D4FF]/70 uppercase mb-4 block">What We Do</span>
            <h2 style={{ fontWeight: 800, fontFamily: "'Orbitron', sans-serif" }} className="text-3xl sm:text-4xl text-white">
              Our Focus <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00D4FF]">Areas</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {domains.map((d, i) => (
              <TiltCard key={d.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.15] transition-all group h-full"
                >
                  {/* Hover gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${d.color} opacity-0 group-hover:opacity-[0.05] rounded-2xl transition-opacity duration-500`} />

                  <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${d.color} flex items-center justify-center mb-5 shadow-lg`}>
                    <d.icon size={22} className="text-white" />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700 }} className="text-white mb-2 relative">{d.title}</h3>
                  <p style={{ fontSize: 13 }} className="text-white/30 leading-relaxed relative">{d.desc}</p>

                  <div className="mt-4 flex items-center gap-1 text-white/20 group-hover:text-[#00D4FF] transition-colors relative" style={{ fontSize: 12, fontWeight: 600 }}>
                    Explore <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EVENTS ===== */}
      <section className="py-28 relative">
        <div className="absolute left-1/3 top-0 w-[400px] h-[400px] bg-[#0066FF]/8 rounded-full blur-[150px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-end justify-between mb-14">
            <div>
              <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, fontFamily: "'Orbitron', sans-serif" }} className="text-[#00D4FF]/70 uppercase mb-4 block">Stay Updated</span>
              <h2 style={{ fontWeight: 800, fontFamily: "'Orbitron', sans-serif" }} className="text-3xl sm:text-4xl text-white">
                Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00D4FF]">Events</span>
              </h2>
            </div>
            <Link to="/events" className="hidden sm:inline-flex items-center gap-2 text-[#00D4FF] hover:gap-3 transition-all" style={{ fontSize: 13, fontWeight: 600 }}>
              View all <ArrowRight size={16} />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {upcomingEvents.map((e, i) => (
              <TiltCard key={e.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.15] transition-all group h-full"
                >
                  {/* Top gradient strip */}
                  <div className={`h-1.5 bg-gradient-to-r ${e.color}`} />

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${e.color} text-white`} style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1 }}>{e.tag.toUpperCase()}</span>
                      <span style={{ fontSize: 11, fontWeight: 700, fontFamily: "'Orbitron', sans-serif" }} className="text-white/30">{e.date}</span>
                    </div>

                    <h3 style={{ fontSize: 20, fontWeight: 700 }} className="text-white mb-2">{e.title}</h3>
                    <p style={{ fontSize: 13 }} className="text-white/30 mb-6">{e.desc}</p>

                    <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2" style={{ fontSize: 13, fontWeight: 600 }}>
                      Register Now <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY STRIP ===== */}
      <section className="py-16 relative overflow-hidden">
        <div className="flex gap-4 animate-scroll">
          {[
            "https://images.unsplash.com/photo-1759884248009-92c5e957708e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBoYWNrYXRob24lMjBzdHVkZW50c3xlbnwxfHx8fDE3NzQ1ODE0Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1762968269894-1d7e1ce8894e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMGF1ZGllbmNlfGVufDF8fHx8MTc3NDU5NjU2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1689236673934-66f8e9d9279b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHByb2dyYW1taW5nJTIwbGFwdG9wfGVufDF8fHx8MTc3NDY4OTAxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1728933102332-a4f1a281a621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc0NjYwNDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1719845853806-1c54b0ed37c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc2hvcCUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzQ2ODkwMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1631599143419-ea8539ed4fbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzc0NTk5Mzc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          ].flatMap((src, i) => [src, src]).map((src, i) => (
            <div key={i} className="shrink-0 w-72 h-44 rounded-xl overflow-hidden border border-white/5 opacity-50 hover:opacity-100 transition-opacity">
              <ImageWithFallback src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#0a0a2a] to-[#050510]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0066FF]/10 rounded-full blur-[200px]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto px-4 text-center"
        >
          <h2 style={{ fontWeight: 800, fontFamily: "'Orbitron', sans-serif" }} className="text-3xl sm:text-5xl text-white mb-6 leading-tight">
            Ready to Start Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00D4FF]">Journey?</span>
          </h2>
          <p style={{ fontSize: 17 }} className="text-white/40 mb-10">Join SVIT ACM Student Chapter and be part of a thriving tech community.</p>

          <Link to="/contact" className="group relative inline-flex items-center gap-2 px-10 py-5 rounded-2xl overflow-hidden" style={{ fontSize: 16, fontWeight: 700 }}>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF] to-[#00D4FF]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] blur-2xl opacity-40 group-hover:opacity-70 transition-opacity" />
            <span className="relative">Become a Member</span>
            <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}