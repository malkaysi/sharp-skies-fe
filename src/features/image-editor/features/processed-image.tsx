import { Loader2 } from "lucide-react";
import ImagePreview from "../components/image-preview";
type ProcessedImageProps = {
  imageSrc: string;
  isProcessing: boolean;
};
export default function ProcessedImage({
  imageSrc,
  isProcessing,
}: ProcessedImageProps) {
  return (
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
  );
}
