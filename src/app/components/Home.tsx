import { Link } from "react-router";
import { ArrowRight, Users, Calendar } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, lazy, Suspense } from "react";
const ParticleField = lazy(() => import("./ParticleField"));
import TiltCard from "./TiltCard";
import GlowText from "./GlowText";
import AnimatedCounter from "./AnimatedCounter";
import RollingText from "./RollingText";
import RevealHeading from "./RevealHeading";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import svitCampus from "../../assets/38cc7112b553bd6144b9a84e15b6b77217b38a0c.png";
import svitPhoto from "../../../SVIT.jpeg";
import eventPhoto1 from "../../assets/event_photo_1.jpg.jpeg";
import eventPhoto2 from "../../assets/event_photo_2.jpg.jpeg";
import eventPhoto3 from "../../assets/event_photo_3.jpg.jpeg";
import eventPhoto4 from "../../assets/event_photo_4.jpg.jpeg";

const stats = [
  { icon: Users, value: 17, suffix: "", label: "Members" },
  { icon: Calendar, value: 1, suffix: "", label: "Events Planned" },
];

const upcomingEvents = [
  { date: "APR 02", title: "Inauguration Ceremony", desc: "Grand inauguration of SVIT ACM Student Chapter", tag: "Inauguration", color: "from-blue-500 to-cyan-400" },
];

const eventGalleryImages = [
  { src: eventPhoto1, alt: "SVIT Event Photo 1" },
  { src: eventPhoto2, alt: "SVIT Event Photo 2" },
  { src: eventPhoto3, alt: "SVIT Event Photo 3" },
  { src: eventPhoto4, alt: "SVIT Event Photo 4" },
];

const whatsappCommunityUrl = "https://chat.whatsapp.com/DApcf2RsuyB1kIFlhHrmA9";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-[#050510] text-white overflow-hidden" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      {/* ===== HERO ===== */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Suspense fallback={<div className="absolute inset-0 bg-[#050510]" />}>
          <ParticleField />
        </Suspense>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }} />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          {/* Main heading */}
          <h1 style={{ fontWeight: 800, fontFamily: "'Orbitron', sans-serif", lineHeight: 1.1 }} className="text-4xl sm:text-6xl lg:text-8xl mb-6">
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
            <Link to="/events" className="group group/btn relative inline-flex items-center gap-2 px-8 py-4 rounded-xl overflow-hidden" style={{ fontSize: 15, fontWeight: 600 }}>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF] to-[#00D4FF]" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
              <span className="relative flex items-center"><RollingText text="Explore Events" activeColor="text-white" /></span>
              <ArrowRight size={18} className="relative group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </motion.div>
      </section>

      {/* ===== STATS ===== */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#0a0a1a] to-[#050510]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <TiltCard key={s.label}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 text-center hover:border-[#0066FF]/30 transition-colors"
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
                  src={svitPhoto}
                  alt="Team collaboration"
                  className="w-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, fontFamily: "'Orbitron', sans-serif" }} className="text-[#00D4FF]/70 uppercase mb-4 block">Who We Are</span>
            <RevealHeading>
              <h2 style={{ fontWeight: 800, fontFamily: "'Orbitron', sans-serif" }} className="text-3xl sm:text-4xl mb-4 leading-tight">
                ACM SVIT Student Chapter
              </h2>
            </RevealHeading>
            <p style={{ fontSize: 18, fontWeight: 500 }} className="text-white/70 mb-6 leading-relaxed">
              Advancing Computing as a Science & Profession
            </p>
            <p style={{ fontSize: 15 }} className="text-white/40 mb-8 leading-relaxed">
              We are SVIT's premier community of passionate students dedicated to exploring the world of technology, coding, and innovation.
            </p>
            <Link to="/about" className="group group/btn inline-flex items-center gap-2 text-[#00D4FF] hover:gap-3 transition-all" style={{ fontSize: 14, fontWeight: 600 }}>
              <RollingText text="Learn more about us" activeColor="text-[#00D4FF]" /> <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
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
            <Link to="/events" className="hidden sm:inline-flex group group/btn items-center gap-2 text-[#00D4FF] hover:gap-3 transition-all" style={{ fontSize: 13, fontWeight: 600 }}>
              <RollingText text="View all" activeColor="text-[#00D4FF]" /> <ArrowRight size={16} />
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

                    <Link to="/events/inauguration" className="group group/btn w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 overflow-hidden" style={{ fontSize: 13, fontWeight: 600 }}>
                      <RollingText text="Explore Details" activeColor="text-white" /> <ArrowRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
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
          {[...eventGalleryImages, ...eventGalleryImages].map((img, i) => (
            <div key={i} className="shrink-0 w-72 h-44 rounded-xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-sm opacity-80 hover:opacity-100 transition-opacity">
              <ImageWithFallback src={img.src} alt={img.alt} className="w-full h-full object-cover" />
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
           <h2 style={{ fontWeight: 800, fontFamily: "'Orbitron', sans-serif" }} className="text-2xl sm:text-5xl text-white mb-6 leading-tight">
             Ready to Start Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00D4FF]">Journey?</span>
          </h2>
          <p style={{ fontSize: 17 }} className="text-white/40 mb-10">Join our WhatsApp community and be part of a thriving tech network.</p>

          <a
            href={whatsappCommunityUrl}
            target="_blank"
            rel="noreferrer"
            className="group group/btn relative inline-flex items-center gap-2 px-10 py-5 rounded-2xl overflow-hidden"
            style={{ fontSize: 16, fontWeight: 700 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF] to-[#00D4FF]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] blur-2xl opacity-40 group-hover:opacity-70 transition-opacity" />
            <span className="relative flex items-center"><RollingText text="Join Us" /></span>
            <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>
    </div>
  );
}