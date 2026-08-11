import { AlertCircle } from "lucide-react";
import { useId, useMemo } from "react";
import type { FrameSelectionMode } from "../../../types/stacker";

type ResultQualityChartProps = {
  cutoffPercent: number;
  cutoffFrame: number;
  mode: FrameSelectionMode;
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

function generateBars(random: () => number): number[] {
  return Array.from({ length: BAR_COUNT }, (_, i) => {
    const t = i / BAR_COUNT;
    const base = Math.pow(1 - t, 1.3) * 0.82 + 0.1;
    const noise = (random() - 0.5) * 0.06;
    return Math.max(0.06, Math.min(1, base + noise));
  });
}

export default function ResultQualityChart({
  cutoffPercent,
  cutoffFrame,
  mode,
}: ResultQualityChartProps) {
  const id = useId();
  const bars = useMemo(() => generateBars(mulberry32(hashString(id))), [id]);
  const cutoffIndex = Math.round((BAR_COUNT * cutoffPercent) / 100);

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Frame Quality
        </span>
        <div className="flex items-center gap-2.5">
          <span className="flex items-center gap-1 font-mono text-[10px] text-muted-foreground">
            <span className="inline-block h-2 w-2 rounded-sm bg-primary" />
            used
          </span>
          <span className="flex items-center gap-1 font-mono text-[10px] text-muted-foreground">
            <span className="inline-block h-2 w-2 rounded-sm bg-muted" />
            rejected
          </span>
        </div>
      </div>

      <div className="relative flex h-15 items-end gap-px">
        {bars.map((v, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t-sm ${
              i >= cutoffIndex ? "bg-muted" : "bg-primary"
            }`}
            style={{ height: `${v * 100}%` }}
          />
        ))}
        <div
          className="absolute inset-y-0 w-px bg-amber-400/60"
          style={{ left: `${(cutoffIndex / BAR_COUNT) * 100}%` }}
        />
      </div>
      <div className="mt-1 mb-3 flex justify-between">
        <span className="font-mono text-[9px] text-muted-foreground/60">
          Best
        </span>
        <span className="font-mono text-[9px] text-muted-foreground/60">
          Worst
        </span>
      </div>

      <div className="flex items-start gap-2 rounded-lg border border-amber-500/15 bg-amber-500/5 px-3 py-2.5">
        <AlertCircle className="mt-px h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span className="text-[11px] leading-relaxed text-amber-400">
          {mode === "auto"
            ? `Auto-detected cutoff at frame ${cutoffFrame} — largest quality drop in distribution`
            : `Manually selected top ${cutoffPercent}% of frames`}
        </span>
      </div>
    </div>
  );
}
