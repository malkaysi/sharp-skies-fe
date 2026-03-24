import { useEffect, useMemo, useState } from "react";
import DropZone from "./components/drop-zone";
import ImagePreview from "./components/image-preview";

export default function ImageEditor() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const imagePreviewUrl = useMemo(() => {
    return selectedImage ? URL.createObjectURL(selectedImage) : null;
  }, [selectedImage]);

  useEffect(() => {
    return () => {
      if (imagePreviewUrl) URL.revokeObjectURL(imagePreviewUrl);
    };
  }, [imagePreviewUrl]);

  function handleSelectImage(file: File) {
    setSelectedImage(file);
  }

  function onBack() {
    setSelectedImage(null);
  }

  return (
    <div className="flex items-center justify-center h-full min-h-0">
      {!selectedImage ? (
        <DropZone handleSelectImage={handleSelectImage} />
      ) : (
        <ImagePreview
          imageSrc={imagePreviewUrl ?? ""}
          fileName={selectedImage.name}
          onBack={onBack}
        />
      )}
    </div>
  );
}
