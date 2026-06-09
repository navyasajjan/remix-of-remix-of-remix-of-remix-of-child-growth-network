import { motion } from "motion/react";

const MARKERS = [
  { name: "Delhi", x: 175, y: 150, size: 1 },
  { name: "Mumbai", x: 120, y: 300, size: 1.15 },
  { name: "Bengaluru", x: 175, y: 388, size: 1.1 },
  { name: "Chennai", x: 205, y: 392, size: 0.9 },
  { name: "Hyderabad", x: 178, y: 330, size: 1 },
  { name: "Kolkata", x: 280, y: 248, size: 0.9 },
  { name: "Pune", x: 132, y: 312, size: 0.8 },
  { name: "Ahmedabad", x: 108, y: 240, size: 0.85 },
  { name: "Jaipur", x: 150, y: 188, size: 0.8 },
  { name: "Kochi", x: 165, y: 430, size: 0.75 },
  { name: "Lucknow", x: 215, y: 190, size: 0.8 },
  { name: "Guwahati", x: 320, y: 205, size: 0.7 },
];

// Stylized India silhouette
const INDIA_PATH =
  "M188 38 C205 44 214 60 232 66 C250 72 268 70 286 80 C300 88 296 104 308 112 C322 122 340 120 344 134 C348 148 328 150 322 162 C314 178 332 188 326 202 C320 214 300 206 292 216 C282 228 296 244 286 256 C276 268 258 256 252 268 C244 284 258 300 248 316 C238 334 214 332 206 350 C198 368 210 388 198 406 C188 422 176 440 168 432 C160 424 168 404 162 388 C154 366 132 360 124 340 C116 320 128 300 118 282 C108 262 86 258 84 238 C82 220 102 214 104 196 C106 176 90 166 96 148 C102 130 124 130 134 116 C144 102 138 82 150 70 C162 58 172 32 188 38 Z";

export function IndiaMap({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      viewBox="0 0 420 480"
      className="h-full w-full"
      role="img"
      aria-label="Map of India showing Child Development Centre locations"
    >
      <defs>
        <linearGradient id="landGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(52,214,198,0.22)" />
          <stop offset="100%" stopColor="rgba(220,207,255,0.4)" />
        </linearGradient>
        <filter id="mapGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        d={INDIA_PATH}
        fill="url(#landGrad)"
        stroke="rgba(52,214,198,0.55)"
        strokeWidth="1.5"
        filter="url(#mapGlow)"
      />

      {MARKERS.map((m, i) => (
        <g key={m.name} transform={`translate(${m.x} ${m.y})`}>
          <motion.circle
            r={10 * m.size}
            fill="rgba(52,214,198,0.25)"
            initial={{ scale: 0.6, opacity: 0.2 }}
            animate={{ scale: [0.8, 1.6, 0.8], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.18 }}
          />
          <motion.circle
            r={4.5 * m.size}
            fill="#34D6C6"
            stroke="white"
            strokeWidth="1.4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 + i * 0.07, type: "spring", stiffness: 220 }}
            style={{ filter: "drop-shadow(0 4px 8px rgba(52,214,198,0.6))" }}
          />
          {!compact && i % 3 === 0 && (
            <text
              x={9 * m.size}
              y={3}
              fontSize="11"
              fontWeight="600"
              fill="rgba(40,50,80,0.7)"
              fontFamily="Manrope, sans-serif"
            >
              {m.name}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}
