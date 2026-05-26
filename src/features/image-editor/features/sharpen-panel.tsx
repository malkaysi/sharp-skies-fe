import type {
  Mode,
  SharpenSettings,
  WaveletLayer,
} from "../types/image-editor";
import PanelHeader from "../components/panel-header";
import SimpleMode from "./simple-mode";
import WaveletMode from "./wavelet-mode";

type SharpenPanelProps = {
  settings: SharpenSettings;
  onSettingChange: (key: keyof SharpenSettings, value: number) => void;
  onReset: () => void;
  mode: Mode;
  onModeChange: (mode: Mode) => void;
  onWaveletApply: (layers: WaveletLayer[]) => void;
  isProcessing: boolean;
};

export default function SharpenPanel({
  settings,
  onSettingChange,
  onReset,
  mode,
  onModeChange,
  onWaveletApply,
  isProcessing,
}: SharpenPanelProps) {
  function handlePresetSelect(preset: SharpenSettings) {
    (Object.keys(preset) as (keyof SharpenSettings)[]).forEach((key) => {
      onSettingChange(key, preset[key]);
    });
  }

  return (
    <div className="flex flex-col h-full bg-card border-l border-border overflow-hidden text-left">
      <PanelHeader mode={mode} onModeChange={onModeChange} />
      {mode === "simple" && (
        <SimpleMode
          settings={settings}
          onSettingChange={onSettingChange}
          onPresetSelect={handlePresetSelect}
          onReset={onReset}
        />
      )}
      {mode === "wavelet" && (
        <WaveletMode onApply={onWaveletApply} isProcessing={isProcessing} />
      )}
    </div>
  );
}
