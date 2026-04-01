import { useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, CheckCircle, ArrowRight } from "lucide-react";
import TiltCard from "./TiltCard";
import GlowText from "./GlowText";
import ParticleField from "./ParticleField";
import RollingText from "./RollingText";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#050510] text-white overflow-hidden" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <ParticleField />
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-[#0066FF]/10 rounded-full blur-[120px]" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 text-center px-4">
          <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, fontFamily: "'Orbitron', sans-serif" }} className="text-[#00D4FF]/70 uppercase mb-4 block">Get In Touch</span>
          <h1 style={{ fontWeight: 800, fontFamily: "'Orbitron', sans-serif", lineHeight: 1.1 }} className="text-4xl sm:text-5xl lg:text-6xl mb-6">
            <GlowText text="Contact" className="block text-white" />
            <GlowText text="Us" className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00D4FF]" delay={0.3} />
          </h1>
        </motion.div>
      </section>

      <section className="py-20 relative">
        <div className="absolute left-0 top-1/3 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[150px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 style={{ fontWeight: 800, fontFamily: "'Orbitron', sans-serif" }} className="text-2xl text-white mb-2">
                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00D4FF]">Connect</span>
              </h2>
              <p style={{ fontSize: 14 }} className="text-white/30 leading-relaxed">Reach out for collaborations, queries, or membership.</p>
            </motion.div>

            {[
              { icon: Mail, label: "Email", value: "acm@svitvasad.ac.in" },
              { icon: MapPin, label: "Address", value: "SVIT Campus, Vasad, Gujarat 388306" },
            ].map((c, i) => (
              <TiltCard key={c.label}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.15] transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#00D4FF] flex items-center justify-center shrink-0 shadow-lg shadow-[#0066FF]/20">
                    <c.icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2 }} className="text-white/30 uppercase">{c.label}</p>
                    <p style={{ fontSize: 14, fontWeight: 500 }} className="text-white/70 mt-0.5">{c.value}</p>
                  </div>
                </motion.div>
              </TiltCard>
            ))}

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-white/[0.06] h-44">
              <iframe
                title="SVIT Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.5!2d73.1!3d22.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSVIT%20Vasad!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/[0.06] p-12 text-center h-full flex flex-col items-center justify-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-green-500/20">
                  <CheckCircle size={36} className="text-white" />
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 700, fontFamily: "'Orbitron', sans-serif" }} className="text-white mb-2">Message Sent!</h3>
                <p style={{ fontSize: 14 }} className="text-white/35 mb-8">We'll get back to you within 24 hours.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="group group/btn px-6 py-3 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center overflow-hidden"
                  style={{ fontSize: 14, fontWeight: 600 }}
                >
                  <RollingText text="Send Another" />
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/[0.06] p-8">
                <h3 style={{ fontSize: 20, fontWeight: 700, fontFamily: "'Orbitron', sans-serif" }} className="text-white mb-6">Send a Message</h3>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {[
                    { key: "name", label: "Full Name", placeholder: "Your name", type: "text" },
                    { key: "email", label: "Email", placeholder: "you@example.com", type: "email" },
                  ].map((f) => (
                    <div key={f.key}>
                      <label style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1 }} className="text-white/40 uppercase block mb-2">{f.label} *</label>
                      <input
                        required
                        type={f.type}
                        value={form[f.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        placeholder={f.placeholder}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/[0.08] text-white placeholder-white/15 focus:border-[#0066FF]/50 focus:ring-2 focus:ring-[#0066FF]/10 outline-none transition-all"
                        style={{ fontSize: 14 }}
                      />
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <label style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1 }} className="text-white/40 uppercase block mb-2">Subject *</label>
                  <input
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/[0.08] text-white placeholder-white/15 focus:border-[#0066FF]/50 focus:ring-2 focus:ring-[#0066FF]/10 outline-none transition-all"
                    style={{ fontSize: 14 }}
                  />
                </div>

                <div className="mb-6">
                  <label style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1 }} className="text-white/40 uppercase block mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Your message..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/[0.08] text-white placeholder-white/15 focus:border-[#0066FF]/50 focus:ring-2 focus:ring-[#0066FF]/10 outline-none transition-all resize-none"
                    style={{ fontSize: 14 }}
                  />
                </div>

                <button type="submit" className="group group/btn w-full py-4 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 relative overflow-hidden" style={{ fontSize: 15, fontWeight: 600 }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] blur-xl opacity-40" />
                  <span className="relative flex items-center"><RollingText text="Send Message" /></span>
                  <Send size={16} className="relative group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
