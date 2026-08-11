import { useEffect, useId, useMemo, useState } from "react";

const TILE_COUNT = 18;

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) | 0;
  }
  return hash >>> 0;
}

function mulberry32(seed: number) {
  return function random() {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function FrameGrid() {
  const id = useId();
  const [visibleCount, setVisibleCount] = useState(0);

  const pulseDelays = useMemo(() => {
    const random = mulberry32(hashString(id));
    return Array.from({ length: TILE_COUNT }, () => random() * 1.6);
  }, [id]);

  useEffect(() => {
    const timers = Array.from({ length: TILE_COUNT }, (_, i) =>
      setTimeout(() => setVisibleCount((c) => c + 1), 100 + i * 140),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="grid w-full max-w-120 grid-cols-6 gap-2">
      {Array.from({ length: TILE_COUNT }, (_, i) => (
        <div
          key={i}
          className={`aspect-[4/3] rounded-md border border-border bg-muted transition-opacity duration-300 ${
            i < visibleCount ? "animate-pulse opacity-100" : "opacity-0"
          }`}
          style={
            i < visibleCount
              ? { animationDelay: `${pulseDelays[i]}s` }
              : undefined
          }
        />
      ))}
    </div>
  );
}
