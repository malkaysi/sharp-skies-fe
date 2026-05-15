import PresetChips from "../components/preset-chips";
import AdjustmentSliders from "../components/adjustment-sliders";
import type { SharpenSettings } from "../types/image-editor";
import { useState } from "react";
import PanelHeader from "../components/panel-header";

type SharpenPanelProps = {
  settings: SharpenSettings;
  onSettingChange: (key: keyof SharpenSettings, value: number) => void;
  onReset: () => void;
};

type Mode = "simple" | "wavelet";

export default function SharpenPanel({
  settings,
  onSettingChange,
  onReset,
}: SharpenPanelProps) {
  const [mode, setMode] = useState<Mode>("simple");

  function handlePresetSelect(preset: SharpenSettings) {
    (Object.keys(preset) as (keyof SharpenSettings)[]).forEach((key) => {
      onSettingChange(key, preset[key]);
    });
  }

  return (
    <div className="flex flex-col h-full bg-card border-l border-border overflow-hidden text-left">
      <PanelHeader mode={mode} onModeChange={setMode} />

      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        {mode === "simple" && (
          <>
            <PresetChips settings={settings} onSelect={handlePresetSelect} />
            <AdjustmentSliders
              settings={settings}
              onSettingChange={onSettingChange}
            />
          </>
        )}
        {mode === "wavelet" && (
          <div className="px-5 py-4 text-xs text-muted-foreground">
            Wavelet mode coming soon.
          </div>
        )}
      </div>

      <div className="px-5 py-4 border-t border-border flex flex-col gap-2 shrink-0">
        <button
          onClick={onReset}
          className="w-full py-2 rounded-lg text-xs font-medium border border-border bg-transparent text-muted-foreground flex items-center justify-center gap-1.5 hover:text-foreground hover:bg-muted transition-all"
        >
          Reset to Defaults
        </button>
      </div>
    </div>
  );
}
