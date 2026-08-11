export type StackerPhase = "processing" | "result";

export type FrameSelectionMode = "auto" | "manual";

export type StackSettings = {
  mode: FrameSelectionMode;
  topPercent: number;
};

export type StackResult = {
  imageBlob: Blob;
  framesTotal: number;
  framesSelected: number;
  topPercent: number;
  elapsedMs: number;
};
