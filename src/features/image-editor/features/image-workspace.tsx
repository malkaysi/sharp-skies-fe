import { DEFAULT_SHARPEN_SETTINGS } from "@/utils/constants";
import ProcessedImage from "./processed-image";
import SharpenPanel from "./sharpen-panel";
import type { Mode, WaveletLayer } from "../types/image-editor";

type ImageWorkspaceProps = {
  imageSrc: string;
  settings: typeof DEFAULT_SHARPEN_SETTINGS;
  onSettingChange: (
    key: keyof typeof DEFAULT_SHARPEN_SETTINGS,
    value: number,
  ) => void;
  error: string | null;
  isProcessing: boolean;
  originalSrc: string;
  hasProcessedImage: boolean;
  onReset: () => void;
  mode: Mode;
  onModeChange: (mode: Mode) => void;
  onWaveletApply: (layers: WaveletLayer[]) => void;
};
export default function ImageWorkspace({
  imageSrc,
  settings,
  onSettingChange,
  error,
  isProcessing,
  originalSrc,
  hasProcessedImage,
  onReset,
  mode,
  onModeChange,
  onWaveletApply,
}: ImageWorkspaceProps) {
  return (
    <div className="w-full max-w-full overflow-hidden rounded-2xl">
      <div className="grid h-[calc(100vh-4rem)] grid-cols-1 gap-4 md:grid-cols-[3fr_1fr]">
        <ProcessedImage
          imageSrc={imageSrc}
          isProcessing={isProcessing}
          hasProcessedImage={hasProcessedImage}
          originalSrc={originalSrc}
        />

        <SharpenPanel
          settings={settings}
          onSettingChange={onSettingChange}
          onReset={onReset}
          mode={mode}
          onModeChange={onModeChange}
          isProcessing={isProcessing}
          onWaveletApply={onWaveletApply}
        />

        {error && (
          <p className="text-xs text-destructive text-center">{error}</p>
        )}
      </div>
    </div>
  );
}
