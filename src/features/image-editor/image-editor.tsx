import { useState } from "react";
import ImageWorkspace from "./features/image-workspace";
import { DEFAULT_SHARPEN_SETTINGS } from "@/utils/constants";
import type { SharpenSettings } from "./types/image-editor";
import Header from "./features/header";

type ImageEditorProps = {
  imagePreviewUrl: string | null;
  selectedImage: File;
  handleClearImage: () => void;
};

export default function ImageEditor({
  imagePreviewUrl,
  selectedImage,
  handleClearImage,
}: ImageEditorProps) {
  const [settings, setSettings] = useState<SharpenSettings>(
    DEFAULT_SHARPEN_SETTINGS,
  );

  function handleSettingChange<K extends keyof SharpenSettings>(
    key: K,
    value: SharpenSettings[K],
  ) {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  return (
    <>
      <Header onBack={handleClearImage} fileName={selectedImage.name} />
      <div className="flex items-center justify-center h-full min-h-0">
        <ImageWorkspace
          imageSrc={imagePreviewUrl ?? ""}
          fileName={selectedImage.name}
          settings={settings}
          onSettingChange={handleSettingChange}
        />
      </div>
    </>
  );
}
