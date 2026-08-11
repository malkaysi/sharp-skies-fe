import { api } from "@/lib/sharp-skies-api/client";
import type { StackResult, StackSettings } from "../types/stacker";

type StackApiResponse = {
  image: string;
  frames_total: number;
  frames_selected: number;
  top_percent: number;
  elapsed_ms: number;
};

export async function stackVideo(
  file: File,
  settings: StackSettings,
  signal?: AbortSignal,
): Promise<StackResult> {
  const formData = new FormData();
  formData.append("file", file);
  formData.append(
    "top_percent",
    String(settings.mode === "auto" ? 0 : settings.topPercent),
  );

  const response = await api.post<StackApiResponse>("/stack", formData, {
    signal,
  });
  const { image, frames_total, frames_selected, top_percent, elapsed_ms } =
    response.data;

  const binary = atob(image);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);

  return {
    imageBlob: new Blob([bytes], { type: "image/png" }),
    framesTotal: frames_total,
    framesSelected: frames_selected,
    topPercent: top_percent,
    elapsedMs: elapsed_ms,
  };
}
