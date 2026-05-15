export type SharpenSettings = {
  sigma: number;
  threshold: number;
  amount: number;
  blend: number;
};

export type Mode = "simple" | "wavelet";
