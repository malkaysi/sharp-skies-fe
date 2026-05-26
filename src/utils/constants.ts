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

export const WAVELET_LAYER_META = [
  {
    name: "Fine Detail",
    scale: "1 px",
    strengthMin: 0,
    strengthMax: 3.0,
    strengthStep: 0.05,
  },
  {
    name: "Micro Detail",
    scale: "2 px",
    strengthMin: 0,
    strengthMax: 3.0,
    strengthStep: 0.05,
  },
  {
    name: "Small Structures",
    scale: "4 px",
    strengthMin: 0,
    strengthMax: 2.5,
    strengthStep: 0.05,
  },
  {
    name: "Medium Structures",
    scale: "8 px",
    strengthMin: 0,
    strengthMax: 2.0,
    strengthStep: 0.05,
  },
  {
    name: "Large Structures",
    scale: "16 px",
    strengthMin: 0.5,
    strengthMax: 1.5,
    strengthStep: 0.01,
  },
  {
    name: "Coarse / Residual",
    scale: "32 px",
    strengthMin: 0.5,
    strengthMax: 1.5,
    strengthStep: 0.01,
  },
] as const;

export const WAVELET_SLIDER_CONFIG = {
  strength: {
    label: "Strength",
    description:
      "Multiplies detail at this scale. >1 sharpens, <1 softens, 1.0 leaves unchanged.",
    min: 0,
    max: 3,
    step: 0.05,
  },
  denoise: {
    label: "Denoise",
    description:
      "Suppresses detail values below this threshold before sharpening. Prevents noise from being amplified. Most useful on L1 and L2.",
    min: 0,
    max: 30,
    step: 0.5,
  },
  clip: {
    label: "Clip",
    description:
      "Caps maximum detail amplitude after sharpening. Prevents halos around bright stars. 0 = off.",
    min: 0,
    max: 50,
    step: 0.5,
  },
  blend: {
    label: "Blend",
    description:
      "Mix between original and processed detail for this layer. 1.0 = fully processed, 0.0 = unchanged.",
    min: 0,
    max: 1,
    step: 0.05,
  },
} as const;
