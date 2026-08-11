import type { SharpenSettings } from "@/features/image-editor/types/image-editor";
import type { StackSettings } from "@/features/stacker/types/stacker";

export const DEFAULT_SHARPEN_SETTINGS: SharpenSettings = {
  sigma: 1.2,
  threshold: 8,
  amount: 0.8,
  blend: 0.5,
};

export const SHARPEN_SLIDER_CONFIG = {
  amount: {
    label: "Sharpen Strength",
    description:
      "Controls how aggressively detail is enhanced. Start low and increase until edges look crisp without halos.",
    min: 0,
    max: 2,
    step: 0.05,
  },
  sigma: {
    label: "Detail Size",
    description:
      "Sets the scale of detail to sharpen. Lower values target fine texture like crater edges; higher values target broader surface features.",
    min: 0.5,
    max: 5,
    step: 0.1,
  },
  threshold: {
    label: "Noise Reduction",
    description:
      "Ignores low-contrast areas like flat sky or sensor noise. Raise this if sharpening is making noisy regions look grainy.",
    min: 0,
    max: 30,
    step: 1,
  },
  blend: {
    label: "Blend",
    description:
      "Fades the sharpening result back into the original. Use this to dial back the overall effect without changing any other setting.",
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
      "Amplifies or suppresses detail at this layer's scale. Above 1.0 sharpens, below 1.0 softens. 1.0 passes through unchanged.",
    min: 0,
    max: 3,
    step: 0.05,
  },
  denoise: {
    label: "Denoise",
    description:
      "Removes low-level noise before sharpening so it isn't amplified. Raise on L1–L2 if fine detail looks grainy after sharpening.",
    min: 0,
    max: 30,
    step: 0.5,
  },
  clip: {
    label: "Clip",
    description:
      "Limits how bright sharpened edges can get. Useful for preventing white halos around stars or the lunar limb. 0 = off.",
    min: 0,
    max: 50,
    step: 0.5,
  },
  blend: {
    label: "Blend",
    description:
      "Fades between the original and processed detail for just this layer. Lets you apply other adjustments at partial strength.",
    min: 0,
    max: 1,
    step: 0.05,
  },
} as const;

export const DEFAULT_STACK_SETTINGS: StackSettings = {
  mode: "auto",
  topPercent: 50,
};
export const STACK_MIN_SIMULATED_DURATION_MS = 3000;
