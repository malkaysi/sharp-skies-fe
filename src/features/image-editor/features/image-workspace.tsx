import ImagePreview from "../components/image-preview";
import { DEFAULT_SHARPEN_SETTINGS } from "@/utils/constants";
import AdjustmentSliders from "../components/adjustment-sliders";
import BackButton from "../components/back-button";

type ImageWorkspaceProps = {
  imageSrc: string;
  fileName?: string;
  onBack: () => void;
  settings: typeof DEFAULT_SHARPEN_SETTINGS;
  onSettingChange: (
    key: keyof typeof DEFAULT_SHARPEN_SETTINGS,
    value: number,
  ) => void;
};
export default function ImageWorkspace({
  imageSrc,
  fileName,
  onBack,
  settings,
  onSettingChange,
}: ImageWorkspaceProps) {
  return (
    <div className="w-full max-w-full overflow-hidden rounded-2xl">
      <div className="grid h-[calc(100vh-4rem)] grid-cols-1 gap-4 md:grid-cols-[3fr_1fr]">
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 z-10">
            <BackButton onBack={onBack} />
          </div>
          <div className="flex h-full w-full items-center justify-center p-10">
            <ImagePreview imageSrc={imageSrc} fileName={fileName} />
          </div>
        </div>

        <div className="flex w-full max-w-85 flex-col gap-4 self-center justify-self-center rounded-2xl border border-muted/40 bg-background/80 p-4 shadow-sm">
          <AdjustmentSliders
            settings={settings}
            onSettingChange={onSettingChange}
          />
        </div>
      </div>
    </div>
  );
}
