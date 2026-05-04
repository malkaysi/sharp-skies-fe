import { Loader2 } from "lucide-react";
import ImagePreview from "../components/image-preview";
import CompareMessage from "../components/compare-message";
import { useState } from "react";
type ProcessedImageProps = {
  imageSrc: string;
  isProcessing: boolean;
  hasProcessedImage: boolean;
  originalSrc: string;
};
export default function ProcessedImage({
  imageSrc,
  isProcessing,
  hasProcessedImage,
  originalSrc,
}: ProcessedImageProps) {
  const [isHolding, setIsHolding] = useState(false);

  return (
    <div className="relative flex flex-col h-full">
      <div
        className="flex-1 w-full items-center justify-center p-10 select-none"
        onMouseDown={() => hasProcessedImage && setIsHolding(true)}
        onMouseUp={() => setIsHolding(false)}
        onMouseLeave={() => setIsHolding(false)}
        onTouchStart={() => hasProcessedImage && setIsHolding(true)}
        onTouchEnd={() => setIsHolding(false)}
      >
        <ImagePreview imageSrc={isHolding ? originalSrc : imageSrc} />
        {isProcessing && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/40">
            <Loader2 className="animate-spin text-primary" size={32} />
          </div>
        )}
        <CompareMessage isHolding={isHolding} />
      </div>
    </div>
  );
}
