import { ChevronDown } from "lucide-react";
import SliderField from "../slider-field";
import { WAVELET_LAYER_META, WAVELET_SLIDER_CONFIG } from "@/utils/constants";
import type { WaveletLayer } from "../../types/image-editor";

type LayerCardProps = {
  index: number;
  layer: WaveletLayer;
  isActive: boolean;
  onSelect: () => void;
  onChange: (key: keyof WaveletLayer, value: number) => void;
};

export default function LayerCard({
  index,
  layer,
  isActive,
  onSelect,
  onChange,
}: LayerCardProps) {
  const meta = WAVELET_LAYER_META[index];

  return (
    <div className="border-b border-border">
      <button
        onClick={onSelect}
        className={`w-full px-5 py-3 flex items-center gap-3 text-left transition-colors ${
          isActive ? "bg-primary/5" : "hover:bg-muted/30"
        }`}
      >
        <span
          className={`text-xs font-medium flex-1 ${isActive ? "text-foreground" : "text-muted-foreground"}`}
        >
          {meta.name}
        </span>
        <span className="font-mono text-[10px] text-muted-foreground/60 mr-1.5">
          {meta.scale}
        </span>
        <ChevronDown
          size={14}
          className={`text-muted-foreground/50 transition-transform ${isActive ? "rotate-180" : ""}`}
        />
      </button>

      {isActive && (
        <div className="px-5 pb-4 flex flex-col">
          {(Object.keys(WAVELET_SLIDER_CONFIG) as (keyof WaveletLayer)[]).map(
            (key) => {
              const config = WAVELET_SLIDER_CONFIG[key];
              return (
                <SliderField
                  key={key}
                  label={config.label}
                  description={config.description}
                  min={config.min}
                  max={config.max}
                  step={config.step}
                  value={layer[key]}
                  onChange={(value) => onChange(key, value)}
                />
              );
            },
          )}
        </div>
      )}
    </div>
  );
}
