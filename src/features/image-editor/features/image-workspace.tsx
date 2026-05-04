import { DEFAULT_SHARPEN_SETTINGS } from "@/utils/constants";
import AdjustmentSliders from "../components/adjustment-sliders";
import ProcessedImage from "./processed-image";

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
        <ProcessedImage imageSrc={imageSrc} isProcessing={isProcessing} />

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
