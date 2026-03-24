import { useState } from "react";
import DropZone from "./components/drop-zone";

export default function ImageEditor() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  console.log(selectedImage);

  function handleSelectImage(file: File) {
    setSelectedImage(file);
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <DropZone handleSelectImage={handleSelectImage} />
    </div>
  );
}
