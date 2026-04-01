import { motion } from "motion/react";
import { Linkedin, Github, Mail } from "lucide-react";
import TiltCard from "./TiltCard";
import GlowText from "./GlowText";
import ParticleField from "./ParticleField";
import acmLogo from "../../assets/d16feed6d1c3e6975f13d701bab37fa53bf54d76.png";
import shrinaPatelImg from "../../assets/shrina_patel.jpg";
import jaynaShahImg from "../../assets/jayna_shah.jpeg";
import principalImg from "../../assets/principal.jpg.jpeg";
import suhaniImg from "../../assets/Suhani_photo.jpeg";
import prishaImg from "../../assets/Prisha_Desai.png";
import varunImg from "../../assets/Varun_Patel.jpg";
import aaryaImg from "../../assets/Aarya.jpeg";
import angelImg from "../../assets/Angel_Mendpara.jpg";
import ayaanImg from "../../assets/Ayaan_Shaikh.jpg";
import darshansinhImg from "../../assets/Darshansinh_Vasadiya.jpeg";
import mannImg from "../../assets/Mann_photo.jpg";
import princeImg from "../../assets/Prince_Rabari.jpg";
import rajImg from "../../assets/RAJ_SHAH.jpg";
import veerImg from "../../assets/veer_patel.jpeg";
import zishanImg from "../../assets/Zishan_Photo.jpg";
import freyaImg from "../../assets/Freya_photo.jpg";
import dhavalImg from "../../assets/DhavalPatel.jpeg";

const acmFaculty = [
  { name: "Dr. Shrina Patel", role: "ACM Sponsor", dept: "Computer Science", image: shrinaPatelImg },
];

const faculty = [
  { name: "Dr. DP Soni", role: "Faculty Advisor", dept: "Computer Science", image: principalImg },
  { name: "Prof. Jayna Shah", role: "Faculty Advisor", dept: "Computer Science", image: jaynaShahImg },
];

const coreTeam = [
  { name: "Suhani Patel", role: "Chair Person", color: "from-blue-500 to-cyan-400", image: suhaniImg },
  { name: "Prisha Desai", role: "Vice Chair", color: "from-purple-500 to-pink-500", image: prishaImg },
  { name: "Varun Patel", role: "Secretary", color: "from-emerald-500 to-teal-400", image: varunImg },
  { name: "Veer Patel", role: "Treasurer", color: "from-orange-500 to-yellow-400", image: veerImg },
  { name: "Dhaval Patel", role: "Webmaster", color: "from-rose-500 to-red-400", image: dhavalImg },
  { name: "Dhruv Prajapati", role: "Technical Head", color: "from-indigo-500 to-blue-400", image: "" },
  { name: "Aarya Patel", role: "Community Head", color: "from-violet-500 to-purple-400", image: aaryaImg },
  { name: "Ayaan Shaikh", role: "Industry Engagement Head", color: "from-teal-500 to-emerald-400", image: ayaanImg },
  { name: "Prince Rabari", role: "Technical Coordinator", color: "from-fuchsia-500 to-pink-400", image: princeImg },
  { name: "Mann Soni", role: "Social Media Head", color: "from-cyan-500 to-blue-400", image: mannImg },
  { name: "Freya Shah", role: "Social Media Co-coordinator", color: "from-amber-500 to-orange-400", image: freyaImg },
  { name: "Raj Shah", role: "Event Head", color: "from-pink-500 to-rose-400", image: rajImg },
  { name: "Zishan Vhora", role: "Creative Head", color: "from-blue-600 to-indigo-500", image: zishanImg },
  { name: "Angel Mendpara", role: "Creative Head", color: "from-purple-600 to-violet-500", image: angelImg },
  { name: "Darshansinh Vasadiya", role: "Event Coordinator", color: "from-emerald-600 to-teal-500", image: darshansinhImg },
  { name: "Jaimin Prajapati", role: "Documentation Head", color: "from-orange-600 to-yellow-500", image: "" },
  { name: "Pranav Gohil", role: "Documentation Coordinator", color: "from-red-500 to-rose-400", image: "" },
];

const leads = [
  { name: "Karan Patel", role: "Technical Lead", color: "from-blue-400 to-indigo-500" },
  { name: "Nisha Gupta", role: "Event Lead", color: "from-pink-400 to-rose-500" },
  { name: "Vivek Rao", role: "Design Lead", color: "from-violet-400 to-purple-500" },
  { name: "Meera Iyer", role: "Marketing Lead", color: "from-amber-400 to-orange-500" },
];

const members = [
  { name: "Suhani Patel", role: "Chair Person" },
  { name: "Prisha Desai", role: "Vice Chair" },
  { name: "Varun Patel", role: "Secretary" },
  { name: "Dhaval Patel", role: "Webmaster" },
  { name: "Veer Patel", role: "Treasurer" },
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
            <h2 style={{ fontWeight: 800, fontFamily: "'Orbitron', sans-serif" }} className="text-3xl text-white">ACM Faculty</h2>
          </motion.div>

          {/* ACM Faculty Sponsor */}
          <div className="grid grid-cols-1 gap-5 max-w-[460px] mx-auto mb-12">
            {acmFaculty.map((f, i) => (
              <TiltCard key={f.name}>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-[#1b233d] rounded-[20px] w-full shadow-lg relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-[520px] w-full overflow-hidden bg-gray-200">
                    {f.image ? (
                      <img src={f.image} alt={f.name} className="w-full h-full object-cover object-top" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                        <span className="text-gray-400 text-6xl font-black" style={{ fontFamily: "'Orbitron', sans-serif" }}>{getInitials(f.name)}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6 bg-[#1b233d] flex items-center justify-between gap-4">
                    <h3 className="text-[24px] font-bold text-white leading-tight" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                      {f.name}
                    </h3>
                    <div className="flex gap-2 shrink-0">
                      <a href="#" className="w-9 h-9 rounded-xl bg-white shadow-md flex items-center justify-center text-[#0a1128] hover:bg-gray-100 hover:scale-110 transition-all"><Linkedin size={16} /></a>
                      <a href="#" className="w-9 h-9 rounded-xl bg-white shadow-md flex items-center justify-center text-[#0a1128] hover:bg-gray-100 hover:scale-110 transition-all"><Mail size={16} /></a>
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 mt-20">
            <h2 style={{ fontWeight: 800, fontFamily: "'Orbitron', sans-serif" }} className="text-3xl text-white">Faculty Advisors</h2>
          </motion.div>

          {/* Faculty Advisors */}
          <div className="grid sm:grid-cols-2 gap-16 max-w-[1024px] mx-auto">
            {faculty.map((f, i) => (
              <TiltCard key={f.name}>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i + 1) * 0.1 }}
                  className="bg-[#1b233d] rounded-[20px] w-full shadow-lg relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-[520px] w-full overflow-hidden bg-gray-200">
                    {f.image ? (
                      <img src={f.image} alt={f.name} className="w-full h-full object-cover object-top" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                        <span className="text-gray-400 text-6xl font-black" style={{ fontFamily: "'Orbitron', sans-serif" }}>{getInitials(f.name)}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6 bg-[#1b233d] flex items-center justify-between gap-3">
                    <h3 className="text-[24px] font-bold text-white leading-tight" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                      {f.name}
                    </h3>
                    <div className="flex gap-2 shrink-0">
                      <a href="#" className="w-8 h-8 rounded-xl bg-white shadow-md flex items-center justify-center text-[#0a1128] hover:bg-gray-100 hover:scale-110 transition-all"><Linkedin size={15} /></a>
                      <a href="#" className="w-8 h-8 rounded-xl bg-white shadow-md flex items-center justify-center text-[#0a1128] hover:bg-gray-100 hover:scale-110 transition-all"><Mail size={15} /></a>
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#0066FF]/5 rounded-full blur-[150px]" />
        <div className="relative max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, fontFamily: "'Orbitron', sans-serif" }} className="text-[#00D4FF]/70 uppercase mb-4 block">Leadership</span>
            <h2 style={{ fontWeight: 800, fontFamily: "'Orbitron', sans-serif" }} className="text-3xl text-white">
              Core Team <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00D4FF]">2025-26</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeam.map((m, i) => (
              <TiltCard key={m.name}>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-[#1b233d] rounded-[20px] w-full shadow-lg relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`relative h-[440px] w-full overflow-hidden bg-gradient-to-br ${m.color}`}>
                    {m.image ? (
                      <img src={m.image} alt={m.name} className="w-full h-full object-cover object-top" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-white text-6xl font-black" style={{ fontFamily: "'Orbitron', sans-serif" }}>{getInitials(m.name)}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5 bg-[#1b233d] flex items-center justify-between gap-2">
                    <div className="text-left flex-1 min-w-0">
                      <h3 className="text-[22px] font-bold text-white mb-2 whitespace-nowrap overflow-hidden text-ellipsis" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                        {m.name}
                      </h3>
                      <div className="inline-block bg-[#0f172a] border border-white/10 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {m.role}
                      </div>
                    </div>
                    <div className="flex gap-1.5 shrink-0">
                      <a href="#" className="w-7 h-7 rounded-lg bg-white shadow-md flex items-center justify-center text-[#0a1128] hover:bg-gray-100 hover:scale-110 transition-all"><Linkedin size={13} /></a>
                      <a href="#" className="w-7 h-7 rounded-lg bg-white shadow-md flex items-center justify-center text-[#0a1128] hover:bg-gray-100 hover:scale-110 transition-all"><Github size={13} /></a>
                      <a href="#" className="w-7 h-7 rounded-lg bg-white shadow-md flex items-center justify-center text-[#0a1128] hover:bg-gray-100 hover:scale-110 transition-all"><Mail size={13} /></a>
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}