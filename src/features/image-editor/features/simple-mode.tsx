import AdjustmentSliders from "../components/simple-mode/adjustment-sliders";
import PresetChips from "../components/simple-mode/preset-chips";
import type { SharpenSettings } from "../types/image-editor";
type SimpleModeProps = {
  settings: SharpenSettings;
  onSettingChange: (key: keyof SharpenSettings, value: number) => void;
  onPresetSelect: (preset: SharpenSettings) => void;
  onReset: () => void;
};
export default function SimpleMode({
  settings,
  onSettingChange,
  onPresetSelect,
  onReset,
}: SimpleModeProps) {
  return (
    <>
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <PresetChips settings={settings} onSelect={onPresetSelect} />
        <AdjustmentSliders
          settings={settings}
          onSettingChange={onSettingChange}
        />
      </div>
      <div className="px-5 py-4 flex flex-col gap-2 shrink-0">
        <button
          onClick={onReset}
          className="w-full py-2 rounded-lg text-xs font-medium border border-border bg-transparent text-muted-foreground flex items-center justify-center gap-1.5 hover:text-foreground hover:bg-muted transition-all"
        >
          Reset to Defaults
        </button>
      </div>
    </>
  );
}
