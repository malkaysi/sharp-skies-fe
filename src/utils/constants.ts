import type { SharpenSettings } from "@/features/image-editor/types/image-editor";

export const DEFAULT_SHARPEN_SETTINGS: SharpenSettings = {
  sigma: 1.2,
  threshold: 8,
  amount: 0.8,
  blend: 0.5,
};

export const SHARPEN_SLIDER_CONFIG = {
  amount: {
    label: "Sharpen Strength",
    description: "How strong the sharpening effect is",
    min: 0,
    max: 2,
    step: 0.05,
  },
  sigma: {
    label: "Detail Size",
    description: "Small = fine details, Large = broader features",
    min: 0.5,
    max: 5,
    step: 0.1,
  },
  threshold: {
    label: "Noise Reduction",
    description: "Higher values reduce sharpening of noise",
    min: 0,
    max: 30,
    step: 1,
  },
  blend: {
    label: "Blend",
    description: "Mix between original and sharpened image",
    min: 0,
    max: 1,
    step: 0.05,
  },
} as const;

export const SHARPEN_PRESETS: Record<string, SharpenSettings> = {
  Gentle: { sigma: 1.0, threshold: 12, amount: 0.4, blend: 0.4 },
  Balanced: { sigma: 1.2, threshold: 8, amount: 0.8, blend: 0.5 },
  Aggressive: { sigma: 1.5, threshold: 3, amount: 1.5, blend: 0.8 },
  "Lunar Detail": { sigma: 0.8, threshold: 2, amount: 1.2, blend: 0.6 },
};
