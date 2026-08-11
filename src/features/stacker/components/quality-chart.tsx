import { useId, useMemo } from "react";

type QualityChartProps = {
  cutoffPercent?: number;
};

const BAR_COUNT = 48;

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

function generateBars(seed: number): number[] {
  const random = mulberry32(seed);
  return Array.from({ length: BAR_COUNT }, (_, i) => {
    const t = i / BAR_COUNT;
    const base = Math.pow(1 - t, 1.3) * 0.82 + 0.1;
    const noise = (random() - 0.5) * 0.06;
    return Math.max(0.06, Math.min(1, base + noise));
  });
}

export default function QualityChart({ cutoffPercent }: QualityChartProps) {
  const id = useId();
  const bars = useMemo(() => generateBars(hashString(id)), [id]);

  const cutoffIndex =
    cutoffPercent !== undefined
      ? Math.round((BAR_COUNT * cutoffPercent) / 100)
      : null;

  return (
    <div className="px-6 py-5">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        Frame Quality
      </span>
      <div className="relative mt-3 flex h-15 items-end gap-px">
        {bars.map((v, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t-sm ${
              cutoffIndex !== null && i >= cutoffIndex
                ? "bg-muted"
                : "bg-primary"
            }`}
            style={{ height: `${v * 100}%` }}
          />
        ))}
        {cutoffIndex !== null && (
          <div
            className="absolute inset-y-0 w-px bg-amber-400/60"
            style={{ left: `${(cutoffIndex / BAR_COUNT) * 100}%` }}
          />
        )}
      </div>
      <div className="mt-1 flex justify-between">
        <span className="font-mono text-[9px] text-muted-foreground/60">
          Best
        </span>
        <span className="font-mono text-[9px] text-muted-foreground/60">
          Worst
        </span>
      </div>
      <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground/70">
        Illustrative — live per-frame scores aren't available until stacking
        completes.
      </p>
    </div>
  );
}
