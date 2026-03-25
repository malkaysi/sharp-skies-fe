import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import SelectedImage from "./selected-image";

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
      <SelectedImage imageSrc={imageSrc} fileName={fileName} />
      <div className="flex justify-start">
        <Button onClick={onBack}>
          <ArrowLeft />
          Back
        </Button>
      </div>
    </div>
  );
}
