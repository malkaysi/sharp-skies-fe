import { useState } from "react";
import { Upload } from "lucide-react";

type DropZoneProps = {
  handleSelectImage: (file: File) => void;
};

const FORMAT_TAGS = [".tiff", ".png", ".jpg"];
const ACCEPTED_FORMATS = ["image/tiff", "image/png", "image/jpeg"];
const MAX_FILE_SIZE = 20 * 1024 * 1024;

export default function DropZone({ handleSelectImage }: DropZoneProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function selectFile(file: File) {
    if (!ACCEPTED_FORMATS.includes(file.type)) {
      setError("Unsupported file format.");
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setError("File exceeds 20 MB limit.");
      return;
    }
    setError(null);
    handleSelectImage(file);
  }

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragOver(false);
    const files = event.dataTransfer.files;
    if (!files || files.length === 0) return;
    selectFile(files[0]);
  }

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragOver(true);
  }

  function handleDragLeave() {
    setIsDragOver(false);
  }

  function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    selectFile(files[0]);
  }

  return (
    <div className="w-full max-w-150">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => document.getElementById("file-input")?.click()}
        className={`flex aspect-video cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border border-dashed bg-card transition-all ${
          error
            ? "border-destructive bg-destructive/5"
            : isDragOver
              ? "scale-[1.01] border-primary bg-primary/5"
              : "border-border hover:border-primary/35"
        }`}
      >
        <div
          className={`flex h-13 w-13 items-center justify-center rounded-[14px] border border-border transition-all ${
            isDragOver ? "border-primary/20 bg-primary/10" : "bg-muted"
          }`}
        >
          <Upload
            className={`h-5.5 w-5.5 transition-colors ${
              isDragOver ? "text-primary" : "text-muted-foreground"
            }`}
          />
        </div>

        <div className="text-center">
          <p className="mb-1 text-sm font-semibold text-muted-foreground">
            Drop your image here or <span className="text-primary">browse</span>
          </p>
          <p className="text-xs text-muted-foreground/60">
            TIFF, PNG, or JPEG up to 20 MB
          </p>
        </div>

        <div className="flex gap-1.5">
          {FORMAT_TAGS.map((fmt) => (
            <span
              key={fmt}
              className="rounded border border-border bg-muted px-2 py-0.5 font-mono text-[9px] font-medium uppercase tracking-wider text-muted-foreground"
            >
              {fmt}
            </span>
          ))}
        </div>
      </div>

      {error && (
        <p className="mt-2 pt-2 text-center text-xs text-destructive">
          {error}
        </p>
      )}

      <input
        type="file"
        id="file-input"
        accept="image/*,.tiff,.tif"
        onChange={handleFileUpload}
        className="hidden"
      />
    </div>
  );
}
