import { api } from "@/lib/sharp-skies-api/client";

export async function removeBackgroundGlow(
  image: Blob,
  strength: number = 1.0,
): Promise<Blob> {
  const formData = new FormData();
  formData.append("file", image, "stacked.png");
  formData.append("strength", String(strength));

  const response = await api.post<Blob>("/background", formData, {
    responseType: "blob",
  });

  return response.data;
}
