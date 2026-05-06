import { useState } from "react";
import type { SharpenSettings } from "../types/image-editor";
import PanelHeader from "../components/panel-header";

type Mode = "simple" | "wavelet";

type SharpenPanelProps = {
  settings: SharpenSettings;
  onSettingChange: (key: keyof SharpenSettings, value: number) => void;
  onReset: () => void;
};

export default function SharpenPanel() {
  const [mode, setMode] = useState<Mode>("simple");

  function onModeChange(newMode: Mode) {
    setMode(newMode);
  }

  return (
    <div className="flex flex-col h-full bg-card border-l border-border overflow-hidden text-left">
      <PanelHeader mode={mode} onModeChange={onModeChange} />
    </div>
  );
}
