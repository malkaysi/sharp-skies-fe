import type { WaveletLayer } from "../../types/image-editor";

const MAX_HEIGHT = 28;
const MIN_HEIGHT = 4;

type LayerStrengthBarsProps = {
  layers: WaveletLayer[];
  activeLayer: number;
  onSelect: (index: number) => void;
};

export default function LayerStrengthBars({
  layers,
  activeLayer,
  onSelect,
}: LayerStrengthBarsProps) {
  return (
    <div className="px-5 pt-3.5 pb-3.5 border-b border-border">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground pb-3.5">
        Sharpen per Layer
      </p>
      <div className="flex gap-1 items-end">
        {layers.map((layer, i) => {
          const isActive = i === activeLayer;
          const height = Math.max(
            MIN_HEIGHT,
            Math.min(MAX_HEIGHT, layer.strength * 14),
          );
          return (
            <button
              key={i}
              onClick={() => onSelect(i)}
              className="flex-1 flex flex-col items-center gap-1 group"
            >
              <div
                style={{ height: `${height}px` }}
                className={`w-full rounded-t-sm transition-all ${
                  isActive ? "bg-primary" : "bg-muted group-hover:bg-muted/40"
                }`}
              />
              <span
                className={`font-mono text-[9px] transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground/30"
                }`}
              >
                L{i + 1}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
