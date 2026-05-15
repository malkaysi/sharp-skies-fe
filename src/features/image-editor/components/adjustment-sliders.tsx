import { SHARPEN_SLIDER_CONFIG } from "@/utils/constants";
import type { SharpenSettings } from "../types/image-editor";
import SliderField from "./slider-field";

type AdjustmentSlidersProps = {
  settings: SharpenSettings;
  onSettingChange: (key: keyof SharpenSettings, value: number) => void;
};

export default function AdjustmentSliders({
  settings,
  onSettingChange,
}: AdjustmentSlidersProps) {
  const entries = Object.entries(SHARPEN_SLIDER_CONFIG);

  return (
    <div className="flex flex-col">
      {entries.map(([key, config], i) => (
        <div key={key}>
          <SliderField
            label={config.label}
            description={config.description}
            min={config.min}
            max={config.max}
            step={config.step}
            value={settings[key as keyof SharpenSettings]}
            onChange={(value) =>
              onSettingChange(key as keyof SharpenSettings, value)
            }
          />
          {i < entries.length - 1 && <div className="h-px bg-border mx-5" />}
        </div>
      ))}
    </div>
  );
}
