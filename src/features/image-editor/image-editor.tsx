import { useCallback, useEffect, useMemo, useState } from "react";
import ImageWorkspace from "./features/image-workspace";
import { DEFAULT_SHARPEN_SETTINGS } from "@/utils/constants";
import type { SharpenSettings } from "./types/image-editor";
import Header from "./features/header";
import { enhanceImage } from "./services/enhance";

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
  const [processedBlob, setProcessedBlob] = useState<Blob | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSettingChange<K extends keyof SharpenSettings>(
    key: K,
    value: SharpenSettings[K],
  ) {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  const handleEnhance = useCallback(async () => {
    setIsProcessing(true);
    setError(null);

    try {
      const blob = await enhanceImage(selectedImage, settings);
      setProcessedBlob(blob);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Processing failed");
    } finally {
      setIsProcessing(false);
    }
  }, [selectedImage, settings]);

  useEffect(() => {
    const timer = setTimeout(handleEnhance, 600);
    return () => clearTimeout(timer);
  }, [handleEnhance]);

  const processedImageUrl = useMemo(() => {
    if (!processedBlob) return null;
    return URL.createObjectURL(processedBlob);
  }, [processedBlob]);

  function handleBack() {
    setProcessedBlob(null);
    handleClearImage();
  }

  function handleDownload() {
    if (!processedBlob) return;
    const url = URL.createObjectURL(processedBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedImage.name.replace(/\.[^.]+$/, "")}_sharpened.png`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <Header
        onBack={handleBack}
        fileName={selectedImage.name}
        onExport={handleDownload}
        hasProcessedImage={!!processedBlob}
      />
      <div className="flex items-center justify-center h-full min-h-0">
        <ImageWorkspace
          imageSrc={processedImageUrl ?? imagePreviewUrl ?? ""}
          settings={settings}
          onSettingChange={handleSettingChange}
          error={error}
          isProcessing={isProcessing}
        />
      </div>
    </>
  );
}
