import { useEffect, useState } from "react";

const TILE_COUNT = 18;

export default function FrameGrid() {
  const [visibleCount, setVisibleCount] = useState(0);

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
            i < visibleCount ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
