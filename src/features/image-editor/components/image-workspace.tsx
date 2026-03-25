import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ImagePreview from "./image-preview";

type ImageWorkspaceProps = {
  imageSrc: string;
  fileName?: string;
  onBack: () => void;
};
export default function ImageWorkspace({
  imageSrc,
  fileName,
  onBack,
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

        <div className="flex flex-col gap-4 p-2 rounded-lg border border-muted/30">
          <h4 className="text-sm font-semibold">Adjust Image</h4>
          {/* sliders and control rows */}
          <label className="text-xs font-medium">Brightness</label>
          <input
            type="range"
            min="0"
            max="200"
            defaultValue="100"
            className="w-full"
          />
          <label className="text-xs font-medium">Contrast</label>
          <input
            type="range"
            min="0"
            max="200"
            defaultValue="100"
            className="w-full"
          />
          <label className="text-xs font-medium">Saturation</label>
          <input
            type="range"
            min="0"
            max="200"
            defaultValue="100"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
