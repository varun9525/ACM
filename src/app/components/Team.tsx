import { motion } from "motion/react";
import { Linkedin, Github, Mail } from "lucide-react";
import TiltCard from "./TiltCard";
import GlowText from "./GlowText";
import ParticleField from "./ParticleField";
import acmLogo from "../../assets/d16feed6d1c3e6975f13d701bab37fa53bf54d76.png";

const faculty = [
  { name: "Dr. Rajesh Patel", role: "Faculty Advisor", dept: "Computer Science" },
];

const coreTeam = [
  { name: "Arjun Mehta", role: "Chairperson", color: "from-blue-500 to-cyan-400" },
  { name: "Priya Sharma", role: "Vice Chairperson", color: "from-purple-500 to-pink-500" },
  { name: "Rohan Desai", role: "Secretary", color: "from-emerald-500 to-teal-400" },
  { name: "Ananya Joshi", role: "Treasurer", color: "from-orange-500 to-yellow-400" },
];

const leads = [
  { name: "Karan Patel", role: "Technical Lead", color: "from-blue-400 to-indigo-500" },
  { name: "Nisha Gupta", role: "Event Lead", color: "from-pink-400 to-rose-500" },
  { name: "Vivek Rao", role: "Design Lead", color: "from-violet-400 to-purple-500" },
  { name: "Meera Iyer", role: "Marketing Lead", color: "from-amber-400 to-orange-500" },
];

const members = [
  { name: "Dhruv Shah", role: "Member" },
  { name: "Riya Agarwal", role: "Member" },
  { name: "Aditya Kumar", role: "Member" },
  { name: "Sneha Verma", role: "Member" },
  { name: "Harsh Trivedi", role: "Member" },
  { name: "Kavya Desai", role: "Member" },
  { name: "Nikhil Rana", role: "Member" },
  { name: "Pooja Nair", role: "Member" },
];

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("");
}

export default function Team() {
  return (
    <div className="bg-[#050510] text-white overflow-hidden" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <ParticleField />
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px]" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 text-center px-4">
          <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, fontFamily: "'Orbitron', sans-serif" }} className="text-[#00D4FF]/70 uppercase mb-4 block">Our Team</span>
          <h1 style={{ fontWeight: 800, fontFamily: "'Orbitron', sans-serif", lineHeight: 1.1 }} className="text-4xl sm:text-5xl lg:text-6xl mb-6">
            <GlowText text="Meet the" className="block text-white" />
            <GlowText text="Team" className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00D4FF]" delay={0.3} />
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} style={{ fontSize: 17 }} className="text-white/40 max-w-xl mx-auto">
            The passionate individuals behind SVIT ACM.
          </motion.p>
        </motion.div>
      </section>

      {/* Faculty */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, fontFamily: "'Orbitron', sans-serif" }} className="text-[#00D4FF]/70 uppercase mb-4 block">Mentors</span>
            <h2 style={{ fontWeight: 800, fontFamily: "'Orbitron', sans-serif" }} className="text-3xl text-white">Faculty Advisors</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {faculty.map((f, i) => (
              <TiltCard key={f.name}>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6 text-center hover:border-white/[0.15] transition-all"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00D4FF] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#0066FF]/20">
                    <span className="text-white" style={{ fontSize: 20, fontWeight: 700, fontFamily: "'Orbitron', sans-serif" }}>{getInitials(f.name)}</span>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700 }} className="text-white">{f.name}</h3>
                  <p style={{ fontSize: 13, fontWeight: 600 }} className="text-[#00D4FF] mt-1">{f.role}</p>
                  <p style={{ fontSize: 12 }} className="text-white/25 mt-1">{f.dept}</p>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#0066FF]/5 rounded-full blur-[150px]" />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, fontFamily: "'Orbitron', sans-serif" }} className="text-[#00D4FF]/70 uppercase mb-4 block">Leadership</span>
            <h2 style={{ fontWeight: 800, fontFamily: "'Orbitron', sans-serif" }} className="text-3xl text-white">
              Core Team <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00D4FF]">2025-26</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coreTeam.map((m, i) => (
              <TiltCard key={m.name}>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.15] transition-all group"
                >
                  {/* Top gradient */}
                  <div className={`h-24 bg-gradient-to-br ${m.color} opacity-20 group-hover:opacity-30 transition-opacity relative`}>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050510]" />
                  </div>

                  <div className="-mt-10 pb-6 px-5 text-center relative">
                    <div className="w-20 h-20 rounded-full border-4 border-[#050510] mx-auto shadow-xl">
                      <div className={`w-full h-full rounded-full bg-gradient-to-br ${m.color} flex items-center justify-center`}>
                        <span className="text-white" style={{ fontSize: 18, fontWeight: 700, fontFamily: "'Orbitron', sans-serif" }}>{getInitials(m.name)}</span>
                      </div>
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 700 }} className="text-white mt-4">{m.name}</h3>
                    <p style={{ fontSize: 13, fontWeight: 600 }} className="text-[#00D4FF] mt-1">{m.role}</p>

                    <div className="flex justify-center gap-2 mt-4">
                      {[Linkedin, Github, Mail].map((Icon, j) => (
                        <a key={j} href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 hover:border-[#0066FF]/50 hover:bg-[#0066FF]/10 text-white/30 hover:text-[#00D4FF] flex items-center justify-center transition-all">
                          <Icon size={14} />
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Leads */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, fontFamily: "'Orbitron', sans-serif" }} className="text-[#00D4FF]/70 uppercase mb-4 block">Specialists</span>
            <h2 style={{ fontWeight: 800, fontFamily: "'Orbitron', sans-serif" }} className="text-3xl text-white">
              Domain <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00D4FF]">Leads</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {leads.map((m, i) => (
              <TiltCard key={m.name}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-5 text-center hover:border-white/[0.15] transition-all group"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${m.color} flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white" style={{ fontSize: 16, fontWeight: 700, fontFamily: "'Orbitron', sans-serif" }}>{getInitials(m.name)}</span>
                  </div>
                  <h3 style={{ fontSize: 14, fontWeight: 700 }} className="text-white">{m.name}</h3>
                  <p style={{ fontSize: 11, fontWeight: 500 }} className="text-white/25 mt-0.5">{m.role}</p>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, fontFamily: "'Orbitron', sans-serif" }} className="text-[#00D4FF]/70 uppercase mb-4 block">Members</span>
            <h2 style={{ fontWeight: 800, fontFamily: "'Orbitron', sans-serif" }} className="text-3xl text-white">
              Team <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00D4FF]">Members</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {members.map((m, i) => (
              <TiltCard key={m.name}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-5 text-center hover:border-white/[0.15] transition-all group"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-500 to-slate-600 flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white" style={{ fontSize: 16, fontWeight: 700, fontFamily: "'Orbitron', sans-serif" }}>{getInitials(m.name)}</span>
                  </div>
                  <h3 style={{ fontSize: 14, fontWeight: 700 }} className="text-white">{m.name}</h3>
                  <p style={{ fontSize: 11, fontWeight: 500 }} className="text-white/25 mt-0.5">{m.role}</p>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}