import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

type ImagePreviewProps = {
  imageSrc: string;
  fileName?: string;
  onBack: () => void;
};
export default function ImagePreview({
  imageSrc,
  fileName,
  onBack,
}: ImagePreviewProps) {
  return (
    <div className="overflow-hidden rounded-2xl">
      <p className="text-sm font-medium">Preview</p>
      {fileName ? (
        <p className="text-sm text-muted-foreground">{fileName}</p>
      ) : null}

      <div className="flex items-center justify-center py-4">
        <img
          src={imageSrc}
          alt={fileName ?? "Image Preview"}
          className="max-h-[70vh] w-full rounded-xl object-contain"
        />
      </div>
      <div className="flex justify-start">
        <Button onClick={onBack}>
          <ArrowLeft />
          Back
        </Button>
      </div>
    </div>
  );
}
