import { CloudUploadIcon } from "lucide-react";

type DropZoneProps = {
  handleSelectImage: (file: File) => void;
};

export default function DropZone({ handleSelectImage }: DropZoneProps) {
  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (!files || files.length === 0) return;
    const file = files[0];
    handleSelectImage(file);
  }

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    const file = files[0];
    handleSelectImage(file);
  }

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="relative flex flex-col items-center space-y-4"
    >
      <div className="w-xl h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-gray-400 transition-colors">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            title=""
          />
          <CloudUploadIcon className="size-8 mb-2" />
          <p className="text-gray-600">Upload Image</p>
          <p className="text-sm text-gray-400">
            Click here or drag and drop to upload
          </p>
        </div>
      </div>
    </div>
  );
}
