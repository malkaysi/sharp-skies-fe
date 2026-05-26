import { api } from "@/lib/sharp-skies-api/client";
import type { WaveletLayer } from "../types/image-editor";

export async function enhanceWavelet(
  selectedImage: File,
  layers: WaveletLayer[],
): Promise<Blob> {
  const formData = new FormData();
  formData.append("file", selectedImage);
  formData.append("layers", JSON.stringify(layers));

  const response = await api.post<Blob>("/enhance/wavelet", formData, {
    responseType: "blob",
  });

  return response.data;
}
