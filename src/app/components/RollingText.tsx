import React from 'react';

interface RollingTextProps {
  text: string;
  className?: string;
  activeColor?: string;
}

export default function RollingText({ text, className = '', activeColor = 'text-white' }: RollingTextProps) {
  return (
    <span className={`inline-flex overflow-hidden ${className}`}>
      {text.split('').map((char, i) => (
        <span key={i} className="relative inline-flex">
          <span
            className="transition-transform duration-500 ease-out group-hover/btn:-translate-y-full"
            style={{ transitionDelay: `${i * 0.02}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
          <span
            className={`absolute left-0 top-0 transition-transform duration-500 ease-out translate-y-full group-hover/btn:translate-y-0 ${activeColor}`}
            style={{ transitionDelay: `${i * 0.02}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        </span>
      ))}
    </span>
  );
}
