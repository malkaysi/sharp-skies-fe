import { SHARPEN_PRESETS } from "@/utils/constants";
import type { SharpenSettings } from "../types/image-editor";

type PresetChipsProps = {
  settings: SharpenSettings;
  onSelect: (preset: SharpenSettings) => void;
};

export default function PresetChips({ settings, onSelect }: PresetChipsProps) {
  const activePreset = Object.entries(SHARPEN_PRESETS).find(([, preset]) =>
    (Object.keys(preset) as (keyof SharpenSettings)[]).every(
      (k) => preset[k] === settings[k],
    ),
  )?.[0];

  return (
    <div className="px-5 py-3.5 border-b border-border">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2.5">
        Presets
      </p>
      <div className="flex gap-1.5 flex-wrap">
        {Object.entries(SHARPEN_PRESETS).map(([name, preset]) => (
          <button
            key={name}
            onClick={() => onSelect(preset)}
            className={`px-3 py-1.25 rounded-full text-xs font-medium border transition-all ${
              activePreset === name
                ? "border-primary/50 bg-primary/10 text-primary"
                : "border-border bg-transparent text-muted-foreground hover:text-foreground hover:border-border/80"
            }`}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}
