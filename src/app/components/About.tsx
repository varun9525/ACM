import { motion } from "motion/react";
import { Target, Eye, Heart, Award, Globe, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import TiltCard from "./TiltCard";
import GlowText from "./GlowText";
import ParticleField from "./ParticleField";
import acmTextLogo from "../../assets/757ae12a6ac34d5e0f9d1d6febf918ba3d0766c4.png";
import svitCampus from "../../assets/38cc7112b553bd6144b9a84e15b6b77217b38a0c.png";

const values = [
  { icon: Heart, title: "Community", desc: "Building lasting connections among tech enthusiasts.", color: "from-pink-500 to-rose-500" },
  { icon: Zap, title: "Innovation", desc: "Encouraging creative problem-solving and new ideas.", color: "from-yellow-400 to-orange-500" },
  { icon: Globe, title: "Inclusivity", desc: "Welcoming students from all backgrounds and skill levels.", color: "from-emerald-400 to-teal-500" },
  { icon: Award, title: "Excellence", desc: "Striving for the highest standards in everything we do.", color: "from-blue-500 to-cyan-400" },
];

const timeline = [
  { year: "2025", title: "Chapter Conceived", desc: "A group of passionate students at SVIT began planning the ACM chapter." },
  { year: "Jan 2026", title: "Application Submitted", desc: "Official application submitted to ACM for student chapter status." },
  { year: "Mar 2026", title: "Chapter Approved", desc: "ACM officially approved SVIT ACM Student Chapter with 17 founding members." },
  { year: "Apr 2, 2026", title: "Inauguration", desc: "Grand inauguration ceremony — the official launch of SVIT ACM Student Chapter." },
];

export default function About() {
  return (
    <div className="bg-[#050510] text-white overflow-hidden" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <ParticleField />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#0066FF]/15 rounded-full blur-[120px]" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 text-center px-4">
          <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, fontFamily: "'Orbitron', sans-serif" }} className="text-[#00D4FF]/70 uppercase mb-4 block">About Us</span>
          <h1 style={{ fontWeight: 800, fontFamily: "'Orbitron', sans-serif", lineHeight: 1.1 }} className="text-4xl sm:text-5xl lg:text-6xl mb-6">
            <GlowText text="Empowering Future" className="block text-white" />
            <GlowText text="Technologists" className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00D4FF]" delay={0.3} />
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} style={{ fontSize: 17 }} className="text-white/40 max-w-2xl mx-auto">
            A community driven by curiosity, collaboration, and the passion to make technology accessible to everyone.
          </motion.p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          {[
            { icon: Target, title: "Our Mission", text: "To foster a community where students can explore, learn, and excel in computing. We bridge the gap between academics and industry through hands-on learning, mentorship, and collaborative projects.", color: "from-blue-500 to-cyan-400" },
            { icon: Eye, title: "Our Vision", text: "To be the leading student tech community in Gujarat, recognized for producing innovative thinkers and skilled professionals who contribute to the advancement of computing.", color: "from-purple-500 to-pink-500" },
          ].map((item, i) => (
            <TiltCard key={item.title}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 hover:border-white/[0.15] transition-all h-full"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 shadow-lg`}>
                  <item.icon size={26} className="text-white" />
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 700 }} className="text-white mb-3">{item.title}</h3>
                <p style={{ fontSize: 15 }} className="text-white/35 leading-relaxed">{item.text}</p>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* What is ACM */}
      <section className="py-24 relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[150px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, fontFamily: "'Orbitron', sans-serif" }} className="text-[#00D4FF]/70 uppercase mb-4 block">About ACM</span>
            <img src={acmTextLogo} alt="ACM - Association for Computing Machinery" className="mb-6 h-14 object-contain" style={{ filter: 'invert(1) hue-rotate(180deg)', mixBlendMode: 'screen' }} />
            <h2 style={{ fontWeight: 800, fontFamily: "'Orbitron', sans-serif" }} className="text-3xl sm:text-4xl text-white mb-6">
              What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00D4FF]">ACM?</span>
            </h2>
            <p style={{ fontSize: 15 }} className="text-white/35 mb-4 leading-relaxed">
              The Association for Computing Machinery is the world's largest computing society, uniting educators, researchers, and professionals to inspire dialogue and address the field's challenges.
            </p>
            <p style={{ fontSize: 15 }} className="text-white/35 leading-relaxed">
              ACM Student Chapters provide networking, mentoring, and bonding over shared interests. They offer career resources and a platform to grow beyond the classroom.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#0066FF]/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <ImageWithFallback src={svitCampus} alt="Campus" className="w-full object-cover aspect-[4/3]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, fontFamily: "'Orbitron', sans-serif" }} className="text-[#00D4FF]/70 uppercase mb-4 block">Our Values</span>
            <h2 style={{ fontWeight: 800, fontFamily: "'Orbitron', sans-serif" }} className="text-3xl sm:text-4xl text-white">
              What <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00D4FF]">Drives</span> Us
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <TiltCard key={v.title}>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6 text-center hover:border-white/[0.15] transition-all h-full"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${v.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <v.icon size={28} className="text-white" />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700 }} className="text-white mb-2">{v.title}</h3>
                  <p style={{ fontSize: 13 }} className="text-white/30">{v.desc}</p>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 relative">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[500px] h-[500px] bg-[#0066FF]/5 rounded-full blur-[150px]" />
        <div className="relative max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, fontFamily: "'Orbitron', sans-serif" }} className="text-[#00D4FF]/70 uppercase mb-4 block">Our Journey</span>
            <h2 style={{ fontWeight: 800, fontFamily: "'Orbitron', sans-serif" }} className="text-3xl sm:text-4xl text-white">
              Chapter <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00D4FF]">Timeline</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#0066FF]/40 via-[#00D4FF]/20 to-transparent" />

            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative flex items-start mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-[#0066FF]/30 rounded-full blur-md" />
                    <div className="relative w-4 h-4 bg-gradient-to-br from-[#0066FF] to-[#00D4FF] rounded-full border-4 border-[#050510] shadow-lg" />
                  </div>
                </div>

                <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-14 md:text-right" : "md:pl-14"}`}>
                  <span style={{ fontSize: 13, fontWeight: 800, fontFamily: "'Orbitron', sans-serif" }} className="text-[#00D4FF]">{t.year}</span>
                  <h3 style={{ fontSize: 16, fontWeight: 700 }} className="text-white mt-1">{t.title}</h3>
                  <p style={{ fontSize: 13 }} className="text-white/30 mt-1">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}