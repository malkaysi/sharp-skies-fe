import ImagePreview from "../components/image-preview";
import { DEFAULT_SHARPEN_SETTINGS } from "@/utils/constants";
import AdjustmentSliders from "../components/adjustment-sliders";

type ImageWorkspaceProps = {
  imageSrc: string;
  fileName?: string;
  settings: typeof DEFAULT_SHARPEN_SETTINGS;
  onSettingChange: (
    key: keyof typeof DEFAULT_SHARPEN_SETTINGS,
    value: number,
  ) => void;
};
export default function ImageWorkspace({
  imageSrc,
  fileName,
  settings,
  onSettingChange,
}: ImageWorkspaceProps) {
  return (
    <div className="w-full max-w-full overflow-hidden rounded-2xl">
      <div className="grid h-[calc(100vh-4rem)] grid-cols-1 gap-4 md:grid-cols-[3fr_1fr]">
        <div className="relative overflow-hidden">
          <div className="flex h-full w-full items-center justify-center p-10">
            <ImagePreview imageSrc={imageSrc} fileName={fileName} />
          </div>
        </div>

        <AdjustmentSliders
          settings={settings}
          onSettingChange={onSettingChange}
        />
      </div>
    </div>
  );
}
