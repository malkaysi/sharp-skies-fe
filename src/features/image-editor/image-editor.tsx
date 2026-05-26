import { useCallback, useEffect, useMemo, useState } from "react";
import ImageWorkspace from "./features/image-workspace";
import { DEFAULT_SHARPEN_SETTINGS } from "@/utils/constants";
import type { Mode, SharpenSettings, WaveletLayer } from "./types/image-editor";
import Header from "./features/header";
import { enhanceImage } from "./services/enhance";
import { enhanceWavelet } from "./services/enhance-wavelet";

type ImageEditorProps = {
  imagePreviewUrl: string;
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
  const [mode, setMode] = useState<Mode>("simple");
  const [waveletBlob, setWaveletBlob] = useState<Blob | null>(null);

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

  const handleWaveletEnhance = useCallback(
    async (layers: WaveletLayer[]) => {
      setIsProcessing(true);
      setError(null);
      try {
        const blob = await enhanceWavelet(selectedImage, layers);
        setWaveletBlob(blob);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Processing failed");
      } finally {
        setIsProcessing(false);
      }
    },
    [selectedImage],
  );

  useEffect(() => {
    const timer = setTimeout(handleEnhance, 600);
    return () => clearTimeout(timer);
  }, [handleEnhance]);

  const processedImageUrl = useMemo(() => {
    if (!processedBlob) return null;
    return URL.createObjectURL(processedBlob);
  }, [processedBlob]);

  const waveletImageUrl = useMemo(
    () => (waveletBlob ? URL.createObjectURL(waveletBlob) : null),
    [waveletBlob],
  );

  function handleBack() {
    setProcessedBlob(null);
    handleClearImage();
  }

  const activeBlob = mode === "simple" ? processedBlob : waveletBlob;

  function handleDownload() {
    if (!activeBlob) return;
    const url = URL.createObjectURL(activeBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedImage.name.replace(/\.[^.]+$/, "")}_sharpened.png`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleReset() {
    setSettings(DEFAULT_SHARPEN_SETTINGS);
    setProcessedBlob(null);
  }

  return (
    <>
      <Header
        onBack={handleBack}
        fileName={selectedImage.name}
        onExport={handleDownload}
        hasProcessedImage={!!activeBlob}
      />
      <ImageWorkspace
        imageSrc={
          mode === "simple"
            ? (processedImageUrl ?? imagePreviewUrl)
            : (waveletImageUrl ?? imagePreviewUrl)
        }
        hasProcessedImage={
          mode === "simple" ? !!processedImageUrl : !!waveletImageUrl
        }
        originalSrc={imagePreviewUrl}
        settings={settings}
        onSettingChange={handleSettingChange}
        error={error}
        isProcessing={isProcessing}
        onReset={handleReset}
        mode={mode}
        onModeChange={setMode}
        onWaveletApply={handleWaveletEnhance}
      />
    </>
  );
}
