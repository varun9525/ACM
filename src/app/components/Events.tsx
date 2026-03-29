import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import TiltCard from "./TiltCard";
import GlowText from "./GlowText";
import ParticleField from "./ParticleField";

const svitCampus = new URL("../../assets/38cc7112b553bd6144b9a84e15b6b77217b38a0c.png", import.meta.url).href;

const categories = ["All", "Inauguration"];

const events = [
  { id: 1, title: "Inauguration Ceremony", date: "Apr 02, 2026", time: "10 AM - 1 PM", location: "SVIT Auditorium", category: "Inauguration", desc: "Grand inauguration of SVIT ACM Student Chapter. Join us for the official launch with keynote speeches, chapter introduction, and networking.", upcoming: true, img: svitCampus, color: "from-blue-500 to-cyan-400" },
];

export default function Events() {
  const [filter, setFilter] = useState("All");
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");

  const filtered = events.filter(
    (e) => (tab === "upcoming" ? e.upcoming : !e.upcoming) && (filter === "All" || e.category === filter)
  );

  return (
    <div className="bg-[#050510] text-white overflow-hidden" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <ParticleField />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px]" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 text-center px-4">
          <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, fontFamily: "'Orbitron', sans-serif" }} className="text-[#00D4FF]/70 uppercase mb-4 block">Events</span>
          <h1 style={{ fontWeight: 800, fontFamily: "'Orbitron', sans-serif", lineHeight: 1.1 }} className="text-4xl sm:text-5xl lg:text-6xl mb-6">
            <GlowText text="Discover Our" className="block text-white" />
            <GlowText text="Events" className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00D4FF]" delay={0.3} />
          </h1>
        </motion.div>
      </section>

      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white/5 rounded-xl p-1 border border-white/5">
              {(["upcoming", "past"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`relative px-7 py-2.5 rounded-lg capitalize transition-all ${tab === t ? "text-white" : "text-white/40"}`}
                  style={{ fontSize: 13, fontWeight: 600 }}
                >
                  {tab === t && <motion.div layoutId="eventTab" className="absolute inset-0 bg-white/10 rounded-lg border border-white/10" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />}
                  <span className="relative">{t} Events</span>
                </button>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`relative px-5 py-2 rounded-full border transition-all ${filter === c ? "border-[#0066FF]/50 text-[#00D4FF] bg-[#0066FF]/10" : "border-white/5 text-white/30 hover:text-white/60 hover:border-white/15"}`}
                style={{ fontSize: 12, fontWeight: 600 }}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-20 text-white/20" style={{ fontSize: 15 }}>
                {tab === "past" ? "No events found in past events." : "No upcoming events right now."}
              </motion.div>
            ) : (
              <motion.div key={tab + filter} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((e, i) => (
                  <TiltCard key={e.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.15] transition-all group h-full"
                    >
                      {/* Image or gradient placeholder */}
                      {e.img ? (
                        <div className="relative h-48 overflow-hidden">
                          <ImageWithFallback src={e.img} alt={e.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-[#050510]/50 to-transparent" />
                        </div>
                      ) : (
                        <div className={`h-48 bg-gradient-to-br ${e.color} opacity-10 flex items-center justify-center`}>
                          <Calendar size={40} className="text-white/30" />
                        </div>
                      )}

                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${e.color} text-white`} style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1 }}>{e.category.toUpperCase()}</span>
                        </div>
                        <h3 style={{ fontSize: 18, fontWeight: 700 }} className="text-white mb-2">{e.title}</h3>
                        <p style={{ fontSize: 13 }} className="text-white/30 mb-4">{e.desc}</p>

                        <div className="space-y-1.5 mb-5">
                          {[
                            { icon: Calendar, text: e.date },
                            { icon: Clock, text: e.time },
                            { icon: MapPin, text: e.location },
                          ].map((d, j) => (
                            <div key={j} className="flex items-center gap-2 text-white/20" style={{ fontSize: 12 }}>
                              <d.icon size={13} className="text-[#0066FF]" /> {d.text}
                            </div>
                          ))}
                        </div>

                        {e.upcoming && (
                          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2" style={{ fontSize: 13, fontWeight: 600 }}>
                            Register Now <ArrowRight size={14} />
                          </button>
                        )}
                      </div>
                    </motion.div>
                  </TiltCard>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}