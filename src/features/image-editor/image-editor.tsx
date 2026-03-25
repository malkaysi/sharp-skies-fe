import { useEffect, useMemo, useState } from "react";
import DropZone from "./features/drop-zone";
import ImageWorkspace from "./features/image-workspace";
import { DEFAULT_SHARPEN_SETTINGS } from "@/utils/constants";
import type { SharpenSettings } from "./types/image-editor";

export default function ImageEditor() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [settings, setSettings] = useState<SharpenSettings>(
    DEFAULT_SHARPEN_SETTINGS,
  );

  const imagePreviewUrl = useMemo(() => {
    return selectedImage ? URL.createObjectURL(selectedImage) : null;
  }, [selectedImage]);

  useEffect(() => {
    return () => {
      if (imagePreviewUrl) URL.revokeObjectURL(imagePreviewUrl);
    };
  }, [imagePreviewUrl]);

  function handleSelectImage(file: File) {
    setSelectedImage(file);
  }

  function onBack() {
    setSelectedImage(null);
  }

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
    <div className="flex items-center justify-center h-full min-h-0">
      {!selectedImage ? (
        <DropZone handleSelectImage={handleSelectImage} />
      ) : (
        <ImageWorkspace
          imageSrc={imagePreviewUrl ?? ""}
          fileName={selectedImage.name}
          onBack={onBack}
          settings={settings}
          onSettingChange={handleSettingChange}
        />
      )}
    </div>
  );
}
