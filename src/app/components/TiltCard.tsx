import { useRef, useState } from "react";
import { motion } from "motion/react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glare?: boolean;
}

export default function TiltCard({ children, className = "", glare = true }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(800px) rotateX(0deg) rotateY(0deg)");
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -20;
    const rotateY = (x - 0.5) * 20;
    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlarePos({ x: x * 100, y: y * 100 });
  };

  const handleLeave = () => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlarePos({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`relative overflow-hidden ${className}`}
      style={{
        transform,
        transition: "transform 0.15s ease-out",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
      {glare && (
        <div
          className="absolute inset-0 pointer-events-none rounded-[inherit]"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.12) 0%, transparent 60%)`,
          }}
        />
      )}
    </motion.div>
  );
}
