import type { Mode, SharpenSettings } from "../types/image-editor";
import { useState } from "react";
import PanelHeader from "../components/panel-header";
import SimpleMode from "./simple-mode";
import WaveletMode from "./wavelet-mode";

type SharpenPanelProps = {
  settings: SharpenSettings;
  onSettingChange: (key: keyof SharpenSettings, value: number) => void;
  onReset: () => void;
};

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
      {mode === "simple" && (
        <SimpleMode
          settings={settings}
          onSettingChange={onSettingChange}
          onPresetSelect={handlePresetSelect}
          onReset={onReset}
        />
      )}
      {mode === "wavelet" && <WaveletMode />}
    </div>
  );
}
