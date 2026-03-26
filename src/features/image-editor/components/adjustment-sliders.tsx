import { SHARPEN_SLIDER_CONFIG } from "@/utils/constants";
import SliderField from "./slider-field";
import type { SharpenSettings } from "../types/image-editor";

type AdjustmentSlidersProps = {
  settings: SharpenSettings;
  onSettingChange: (key: keyof SharpenSettings, value: number) => void;
};

export default function AdjustmentSliders({
  settings,
  onSettingChange,
}: AdjustmentSlidersProps) {
  return (
    <div>
      <div className="pb-2">
        <h4 className="text-sm font-semibold tracking-tight">Adjust Image</h4>
      </div>
      <div className="flex flex-col gap-4 rounded-lg p-4">
        {Object.entries(SHARPEN_SLIDER_CONFIG).map(([key, config]) => (
          <SliderField
            key={key}
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
        ))}
      </div>
    </div>
  );
}
