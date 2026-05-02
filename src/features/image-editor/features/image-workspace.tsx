import ImagePreview from "../components/image-preview";
import { DEFAULT_SHARPEN_SETTINGS } from "@/utils/constants";
import AdjustmentSliders from "../components/adjustment-sliders";
import { Loader2 } from "lucide-react";

type ImageWorkspaceProps = {
  imageSrc: string;
  settings: typeof DEFAULT_SHARPEN_SETTINGS;
  onSettingChange: (
    key: keyof typeof DEFAULT_SHARPEN_SETTINGS,
    value: number,
  ) => void;
  error: string | null;
  isProcessing: boolean;
};
export default function ImageWorkspace({
  imageSrc,
  settings,
  onSettingChange,
  error,
  isProcessing,
}: ImageWorkspaceProps) {
  return (
    <div className="w-full max-w-full overflow-hidden rounded-2xl">
      <div className="grid h-[calc(100vh-4rem)] grid-cols-1 gap-4 md:grid-cols-[3fr_1fr]">
        <div className="relative overflow-hidden">
          <div className="flex h-full w-full items-center justify-center p-10">
            <ImagePreview imageSrc={imageSrc} />
            {isProcessing && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/40">
                <Loader2 className="animate-spin text-primary" size={32} />
              </div>
            )}
          </div>
        </div>

        <AdjustmentSliders
          settings={settings}
          onSettingChange={onSettingChange}
        />

        {error && (
          <p className="text-xs text-destructive text-center">{error}</p>
        )}
      </div>
    </div>
  );
}
