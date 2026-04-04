import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Clock, MapPin, Users, Sparkles, ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import GlowText from "./GlowText";
import TiltCard from "./TiltCard";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import svitCampus from "../../assets/38cc7112b553bd6144b9a84e15b6b77217b38a0c.png";

export default function EventDetails() {
  const targetDate = new Date("2026-04-02T10:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Immediate calculation to prevent 1-second delay
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };
    
    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-[#050510] min-h-screen text-white overflow-hidden" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      {/* Particle Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#0066FF]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#00D4FF]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Back Button */}
        <Link to="/events" className="group inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-10" style={{ fontSize: 14, fontWeight: 600 }}>
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Events
        </Link>

        {/* Hero Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#0066FF]/20 to-[#00D4FF]/20 border border-[#00D4FF]/30 mb-6">
            <Sparkles size={14} className="text-[#00D4FF]" />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, fontFamily: "'Orbitron', sans-serif" }} className="text-[#00D4FF] uppercase">Official Launch</span>
          </motion.div>
          <h1 style={{ fontWeight: 800, fontFamily: "'Orbitron', sans-serif", lineHeight: 1.1 }} className="text-4xl sm:text-5xl lg:text-7xl mb-6">
            <GlowText text="ACM Chapter" className="block text-white" />
            <GlowText text="Inauguration" className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00D4FF]" delay={0.2} />
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} style={{ fontSize: 17 }} className="text-white/40 max-w-2xl mx-auto">
            Join us as we officially launch the SVIT ACM Student Chapter. A milestone event featuring leadership introductions, keynote notes, and our technical roadmap.
          </motion.p>
        </div>

        {/* Countdown Timer Widget */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="mb-20">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-[#0066FF]/10 blur-xl rounded-[24px]" />
            
            <div className="relative p-[2px] rounded-[24px] overflow-hidden bg-white/5 shadow-2xl">
              {/* Shooting Star Animated Border */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] aspect-square animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,transparent_75%,#0066FF_95%,#00D4FF_100%)] opacity-80 blur-[2px]" />
              
              <div className="relative bg-[#050510]/95 backdrop-blur-2xl rounded-[22px] p-8 sm:p-12 overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#00D4FF]/20 to-transparent opacity-50 blur-3xl pointer-events-none" />
              
              <div className="text-center mb-8">
                <h3 style={{ fontSize: 16, fontWeight: 700, fontFamily: "'Orbitron', sans-serif", letterSpacing: 3 }} className="text-white/50 uppercase">Event Starts In</h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { label: "Days", value: timeLeft.days },
                  { label: "Hours", value: timeLeft.hours },
                  { label: "Minutes", value: timeLeft.minutes },
                  { label: "Seconds", value: timeLeft.seconds },
                ].map((unit, i) => {
                  const paddedValue = unit.value.toString().padStart(2, '0');
                  return (
                  <div key={unit.label} className="relative group perspective-1000">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center transform transition-transform duration-500 group-hover:translate-z-10 group-hover:border-[#00D4FF]/30 group-hover:bg-[#0066FF]/5">
                      <div className="relative h-[60px] sm:h-[80px] flex items-center justify-center overflow-hidden gap-1">
                        {paddedValue.split('').map((digit, idx) => (
                          <div key={idx} className="relative w-[32px] sm:w-[40px] h-full flex items-center justify-center">
                            <AnimatePresence mode="popLayout">
                              <motion.span
                                key={digit}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
                                style={{ fontSize: 48, fontWeight: 800, fontFamily: "'Orbitron', sans-serif" }}
                                className="absolute text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-[0_0_15px_rgba(0,102,255,0.5)] leading-none"
                              >
                                {digit}
                              </motion.span>
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                      <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2 }} className="text-[#00D4FF]/70 uppercase block mt-2">{unit.label}</span>
                    </div>
                  </div>
                )})}
              </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Event Meta Details */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <div className="lg:col-span-2">
            <h2 style={{ fontSize: 24, fontWeight: 800, fontFamily: "'Orbitron', sans-serif" }} className="text-white mb-6">About The Event</h2>
            <div className="prose prose-invert prose-lg max-w-none text-white/50 space-y-4" style={{ fontSize: 16, lineHeight: 1.8 }}>
              <p>The inauguration marks the beginning of our journey as an official ACM Student Chapter. We are thrilled to invite all tech enthusiasts, students, and faculty members to join us for this historic moment.</p>
              <p>During the ceremony, we will unveil our vision for the upcoming academic year, introduce the core committee members, and outline the various domains of focus ranging from Machine Learning to Competitive Programming.</p>
              <p>Don't miss the opportunity to network with industry professionals and faculty advisors who are paving the way for the next generation of computing excellence.</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { icon: Calendar, title: "Date", value: "Thursday, April 02, 2026", color: "text-[#00D4FF]" },
              { icon: Clock, title: "Time", value: "10:00 AM - 1:00 PM IST", color: "text-purple-400" },
              { icon: MapPin, title: "Location", value: "SVIT Auditorium, Main Campus", color: "text-emerald-400" },
              { icon: Users, title: "Attendees", value: "Open to All SVIT Students", color: "text-pink-400" },
            ].map((meta, i) => (
              <TiltCard key={i}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:bg-white/10 transition-colors">
                  <div className={`mt-1 bg-white/5 p-3 rounded-xl ${meta.color}`}>
                    <meta.icon size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1 }} className="text-white/40 uppercase block mb-1">{meta.title}</span>
                    <span style={{ fontSize: 15, fontWeight: 600 }} className="text-white/90">{meta.value}</span>
                  </div>
                </div>
              </TiltCard>
            ))}

            <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 h-48 relative group">
              <ImageWithFallback src={svitCampus} alt="SVIT Campus" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050510] to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <MapPin size={14} className="text-[#00D4FF]" />
                <span className="text-white/80" style={{ fontSize: 13, fontWeight: 600 }}>Get Directions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
