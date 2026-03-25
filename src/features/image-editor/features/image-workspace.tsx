import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ImagePreview from "../components/image-preview";
import { DEFAULT_SHARPEN_SETTINGS } from "@/utils/constants";
import AdjustmentSliders from "../components/adjustment-sliders";

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
      <div className="flex items-center mb-4">
        <Button variant="ghost" onClick={onBack} className="text-sm">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[3fr_1fr]">
        <ImagePreview imageSrc={imageSrc} fileName={fileName} />

        <div className="flex flex-col gap-4 self-center rounded-2xl border border-muted/40 bg-background/80 p-4 shadow-sm">
          <div className="border-b border-muted/30 pb-2">
            <h4 className="text-sm font-semibold tracking-tight">
              Adjust Image
            </h4>
          </div>
          <AdjustmentSliders
            settings={settings}
            onSettingChange={onSettingChange}
          />
        </div>
      </div>
    </div>
  );
}
