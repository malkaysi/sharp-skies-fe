import { api } from "@/lib/sharp-skies-api/client";
import type { SharpenSettings } from "../types/image-editor";

export async function enhanceImage(
  selectedImage: File,
  settings: SharpenSettings,
): Promise<Blob> {
  const formData = new FormData();
  formData.append("file", selectedImage);
  formData.append("sigma", String(settings.sigma));
  formData.append("threshold", String(settings.threshold));
  formData.append("amount", String(settings.amount));
  formData.append("blend", String(settings.blend));

  const response = await api.post<Blob>("/enhance", formData, {
    responseType: "blob",
  });

  return response.data;
}
