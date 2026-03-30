import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import newAcmLogo from "../../assets/67de38ad-7725-4bb3-9c2e-c2bee51045d4-1.png";

export default function SiteLoader({ isInitial, onComplete }: { isInitial: boolean; onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"zoomingIn" | "loading" | "zoomingOut" | "exiting">(
    isInitial ? "loading" : "zoomingIn"
  );
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  // Phase: exiting → call onComplete after fade finishes
  useEffect(() => {
    if (phase !== "exiting") return;
    const t = setTimeout(() => onCompleteRef.current(), 520);
    return () => clearTimeout(t);
  }, [phase]);

  // Phase: zoomingIn → loading
  useEffect(() => {
    if (phase !== "zoomingIn") return;
    const t = setTimeout(() => setPhase("loading"), 900);
    return () => clearTimeout(t);
  }, [phase]);

  // Phase: loading → track REAL resource loading, then zoomingOut
  useEffect(() => {
    if (phase !== "loading") return;

    let cancelled    = false;
    let windowLoaded = false;
    let cur          = 0;

    const advanceTo = (target: number) => {
      if (cancelled) return;
      target = Math.min(Math.round(target), 100);
      if (target <= cur) return;
      cur = target;
      setProgress(cur);
    };

    // DOM parsed → 25%
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => advanceTo(25), { once: true });
    } else {
      advanceTo(25);
    }

    // Images → 25–80%
    const scoreImages = () => {
      const imgs = Array.from(document.images);
      if (!imgs.length) { advanceTo(75); return; }
      let done = 0;
      const tick = () => { done++; advanceTo(25 + (done / imgs.length) * 55); };
      imgs.forEach((img) => {
        if (img.complete) tick();
        else {
          img.addEventListener("load",  tick, { once: true });
          img.addEventListener("error", tick, { once: true });
        }
      });
    };
    const imgTimer = setTimeout(scoreImages, 80);

    // Fonts ready → 90%
    document.fonts.ready.then(() => { if (!cancelled) advanceTo(90); });

    // window.load → 100%, then kick off exit
    const finish = () => {
      windowLoaded = true;
      if (cancelled) return;
      advanceTo(100);
      setTimeout(() => { if (!cancelled) setPhase("zoomingOut"); }, 400);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    // Safety net — never stuck past 8 s
    const safety = setTimeout(() => {
      if (!cancelled && !windowLoaded) {
        advanceTo(100);
        setTimeout(() => { if (!cancelled) setPhase("zoomingOut"); }, 400);
      }
    }, 8000);

    return () => {
      cancelled = true;
      clearTimeout(imgTimer);
      clearTimeout(safety);
      window.removeEventListener("load", finish);
    };
  }, [phase]);

  // Phase: zoomingOut → exiting (fade out the whole overlay)
  useEffect(() => {
    if (phase !== "zoomingOut") return;
    const t = setTimeout(() => setPhase("exiting"), 1600);
    return () => clearTimeout(t);
  }, [phase]);

  return (
    <motion.div
      className={`fixed inset-0 z-[100] overflow-hidden ${phase === "zoomingOut" || phase === "exiting" ? "pointer-events-none" : ""}`}
      animate={{ opacity: phase === "exiting" ? 0 : 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Main scaling rig (zooms outward through diamond portal) */}
        <motion.div
          className="absolute w-0 h-0 flex items-center justify-center top-1/2 left-1/2"
          initial={{ scale: isInitial ? 1 : 150 }}
          animate={
            phase === "zoomingIn" ? { scale: 1 } :
            (phase === "zoomingOut" || phase === "exiting" ? { scale: 150 } : { scale: 1 })
          }
          transition={
            phase === "zoomingIn" ? { duration: 0.9, ease: [0.8, 0, 0.2, 1] } :
            phase === "zoomingOut" ? { duration: 1.6, ease: [0.8, 0, 0.2, 1] } :
            {}
          }
        >
          {/* Dark mask with diamond hole (portal) */}
          <svg width="4000" height="4000" viewBox="-2000 -2000 4000 4000" className="absolute pointer-events-none">
            <path
              d="M -2000 -2000 L 2000 -2000 L 2000 2000 L -2000 2000 Z M 0 -30 L 30 0 L 0 30 L -30 0 Z"
              fill="#050510"
              fillRule="evenodd"
            />
          </svg>

          {/* Laptop UI — fades in on load, fades out on zoom */}
          <motion.div
            className="absolute flex items-center justify-center w-0 h-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "zoomingOut" || phase === "exiting" || phase === "zoomingIn" ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Laptop Screen */}
            <div className="absolute w-[300px] h-[190px] rounded-xl border border-white/10 bg-black/60 backdrop-blur-md shadow-[0_0_80px_rgba(0,102,255,0.1)] flex items-center justify-center">
              <div className="absolute inset-[3px] rounded-[10px] border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
              {/* ACM Logo Image with glow */}
              <img
                src={newAcmLogo}
                alt="ACM"
                className="absolute w-[60px] h-[60px] object-contain"
                style={{
                  filter: "drop-shadow(0 0 30px #00D4FF) drop-shadow(0 0 60px #0066FF)",
                }}
              />
            </div>

            {/* Hinge */}
            <div className="absolute w-[100px] h-[8px] bg-white/10 rounded-b-md top-[95px] left-1/2 -translate-x-1/2" />

            {/* Base Deck */}
            <div className="absolute w-[360px] h-[16px] top-[103px] left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#151525] to-[#050510] border-t border-white/20 rounded-b-[20px] shadow-[0_30px_60px_rgba(0,0,0,0.9)]">
              <div className="absolute left-1/2 -translate-x-1/2 top-[3px] w-[60px] h-[2px] bg-[#00D4FF] rounded-full shadow-[0_0_15px_#00D4FF]" />
            </div>

            {/* Progress UI */}
            <div className="absolute top-[160px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 w-[220px]">
              <div
                style={{ fontSize: 28, fontWeight: 800, fontFamily: "'Orbitron', sans-serif" }}
                className="text-white drop-shadow-[0_0_20px_rgba(0,212,255,0.6)] tracking-widest"
              >
                {progress}%
              </div>
              <div className="w-[200px] h-[3px] bg-white/10 rounded-full overflow-hidden relative">
                <motion.div
                  className="absolute top-0 left-0 bottom-0 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF]"
                  style={{ width: `${progress}%`, boxShadow: "0 0 12px #00D4FF" }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
