import { CloudUploadIcon } from "lucide-react";

export default function FileUpload() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-xl h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-gray-400 transition-colors">
        <div className="flex flex-col items-center justify-center h-full text-center">
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
