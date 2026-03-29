import { motion } from "motion/react";

interface GlowTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function GlowText({ text, className = "", delay = 0 }: GlowTextProps) {
  const words = text.split(" ");
  const classTokens = className.split(/\s+/).filter(Boolean);
  const effectTokens = classTokens.filter(
    (token) =>
      token === "text-transparent" ||
      token === "bg-clip-text" ||
      token.startsWith("bg-gradient-") ||
      token.startsWith("from-") ||
      token.startsWith("via-") ||
      token.startsWith("to-")
  );
  const wrapperTokens = classTokens.filter((token) => !effectTokens.includes(token));

  const wrapperClassName = wrapperTokens.join(" ");
  const wordEffectClassName = effectTokens.join(" ");

  return (
    <span className={wrapperClassName}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: delay + i * 0.08, ease: "easeOut" }}
          className={`inline-block mr-[0.3em] ${wordEffectClassName}`.trim()}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
